/**
 * Firebase Cloud Function - Notion API Proxy
 * 
 * This function acts as a CORS proxy for the Notion API,
 * enabling browser-based requests from the Satya web app.
 */

import * as functions from "firebase-functions";
import fetch from "node-fetch";

// Allowed origins for CORS
const ALLOWED_ORIGINS = [
    "http://localhost:5000",
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "https://satya-468b9.firebaseapp.com",
    "https://satya-468b9.web.app",
    "https://imrsbl.github.io",
];

/**
 * Set CORS headers based on the request origin
 */
function setCorsHeaders(
    request: functions.https.Request,
    response: functions.Response
): boolean {
    const origin = request.headers.origin || "";

    // Check if origin is allowed
    if (ALLOWED_ORIGINS.includes(origin)) {
        response.set("Access-Control-Allow-Origin", origin);
    } else {
        // Allow any origin in development (remove in production if needed)
        response.set("Access-Control-Allow-Origin", "*");
    }

    response.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PATCH");
    response.set(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, Notion-Version"
    );
    response.set("Access-Control-Max-Age", "3600");

    // Handle preflight OPTIONS request
    if (request.method === "OPTIONS") {
        response.status(204).send("");
        return true;
    }

    return false;
}

/**
 * Notion API Proxy Function
 *
 * Usage from client:
 *   POST https://us-central1-satya-468b9.cloudfunctions.net/notionProxy
 *   Body: { url: "https://api.notion.com/v1/pages", method: "POST", body: {...} }
 *
 * Or direct proxy:
 *   POST https://us-central1-satya-468b9.cloudfunctions.net/notionProxy/v1/pages
 *   (with full Notion API body)
 */
export const notionProxy = functions.https.onRequest(async (request, response) => {
    // Handle CORS
    if (setCorsHeaders(request, response)) {
        return;
    }

    try {
        // Get Notion API key from environment variables
        const notionApiKey = process.env.NOTION_API_KEY ||
            functions.config().notion?.api_key;

        if (!notionApiKey) {
            response.status(500).json({
                error: "Server configuration error",
                message: "NOTION_API_KEY is not configured",
            });
            return;
        }

        // Determine the Notion API URL
        // Option 1: URL is passed in the request body
        // Option 2: URL path is appended to the function URL
        let notionUrl: string;
        let requestBody: string | undefined;
        let requestMethod: string = request.method;

        if (request.body?.url) {
            // Client sends { url: "...", method: "POST", body: {...} }
            notionUrl = request.body.url;
            requestBody = request.body.body
                ? JSON.stringify(request.body.body)
                : undefined;
            requestMethod = request.body.method || "POST";
        } else {
            // Direct proxy mode: /notionProxy/v1/pages -> https://api.notion.com/v1/pages
            const path = request.path.replace(/^\/notionProxy/, "") || "/v1/pages";
            notionUrl = `https://api.notion.com${path}`;
            requestBody = request.method !== "GET"
                ? JSON.stringify(request.body)
                : undefined;
        }

        console.log(`Proxying ${requestMethod} to ${notionUrl}`);

        // Make request to Notion API
        const notionResponse = await fetch(notionUrl, {
            method: requestMethod,
            headers: {
                "Authorization": `Bearer ${notionApiKey}`,
                "Content-Type": "application/json",
                "Notion-Version": "2022-06-28",
            },
            body: requestBody,
        });

        // Get response from Notion
        const responseData = await notionResponse.json();

        // Set response status and return data
        response.status(notionResponse.status).json(responseData);

    } catch (error: unknown) {
        console.error("Notion proxy error:", error);

        const errorMessage = error instanceof Error
            ? error.message
            : "Unknown error";

        response.status(500).json({
            error: "Proxy error",
            message: errorMessage,
        });
    }
});

/**
 * OpenRouter API Proxy Function
 *
 * This function proxies requests to OpenRouter API, allowing:
 * 1. Server-side API key storage (more secure)
 * 2. CORS bypass for browser requests
 * 3. Streaming support for real-time responses
 *
 * Usage from client:
 *   POST https://us-central1-satya-468b9.cloudfunctions.net/openrouterProxy
 *   Body: { model: "...", messages: [...], stream: true }
 *   Headers: { "X-OpenRouter-Key": "user-api-key" } (optional, uses server key if not provided)
 */
export const openrouterProxy = functions.https.onRequest(async (request, response) => {
    // Handle CORS
    if (setCorsHeaders(request, response)) {
        return;
    }

    if (request.method !== "POST") {
        response.status(405).json({ error: "Method not allowed" });
        return;
    }

    try {
        // Get API key: prefer user-provided, fallback to server config
        const userApiKey = request.headers["x-openrouter-key"] as string;
        const serverApiKey = process.env.OPENROUTER_API_KEY ||
            functions.config().openrouter?.api_key;

        const apiKey = userApiKey || serverApiKey;

        if (!apiKey) {
            response.status(400).json({
                error: "API key required",
                message: "Please provide OpenRouter API key via X-OpenRouter-Key header or configure server key",
            });
            return;
        }

        const isStreaming = request.body?.stream === true;

        console.log(`OpenRouter proxy: ${request.body?.model}, streaming: ${isStreaming}`);

        // Make request to OpenRouter API
        const openrouterResponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://satya-468b9.web.app",
                "X-Title": "Satya AI Council",
            },
            body: JSON.stringify(request.body),
        });

        if (isStreaming) {
            // Set up streaming response
            response.set("Content-Type", "text/event-stream");
            response.set("Cache-Control", "no-cache");
            response.set("Connection", "keep-alive");

            // @ts-ignore - node-fetch body is a readable stream
            const reader = openrouterResponse.body;
            if (reader) {
                reader.on("data", (chunk: Buffer) => {
                    response.write(chunk);
                });
                reader.on("end", () => {
                    response.end();
                });
                reader.on("error", (err: Error) => {
                    console.error("Stream error:", err);
                    response.end();
                });
            } else {
                response.status(500).json({ error: "No response stream" });
            }
        } else {
            // Non-streaming: return JSON response
            const responseData = await openrouterResponse.json();
            response.status(openrouterResponse.status).json(responseData);
        }

    } catch (error: unknown) {
        console.error("OpenRouter proxy error:", error);

        const errorMessage = error instanceof Error
            ? error.message
            : "Unknown error";

        response.status(500).json({
            error: "Proxy error",
            message: errorMessage,
        });
    }
});

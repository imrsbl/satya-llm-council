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

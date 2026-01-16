# Firebase Cloud Functions - Setup Instructions

## 1. Prerequisites

- Firebase CLI installed: `npm install -g firebase-tools`
- Firebase project on Blaze (pay-as-you-go) plan
- Your Notion API key from [developers.notion.com](https://developers.notion.com/)

## 2. Install Dependencies

```bash
cd functions
npm install
```

## 3. Set Environment Variables

There are two ways to set the Notion API key:

### Option A: Using Firebase Config (Recommended)

```bash
firebase functions:config:set notion.api_key="secret_YOUR_NOTION_API_KEY_HERE"
```

### Option B: Using .env file (for local testing)

Create `functions/.env`:

```
NOTION_API_KEY=secret_YOUR_NOTION_API_KEY_HERE
```

## 4. Deploy the Function

```bash
cd functions
npm run build
firebase deploy --only functions
```

## 5. Get Your Function URL

After deployment, your function URL will be:

```
https://us-central1-satya-468b9.cloudfunctions.net/notionProxy
```

## 6. Update app.js

In `app.js`, change the Notion API call to use your Cloud Function:

```javascript
// OLD: Using third-party proxy
// const proxyUrl = 'https://corsproxy.io/?';
// const response = await fetch(proxyUrl + encodeURIComponent(notionUrl), {...});

// NEW: Using Firebase Cloud Function
const proxyUrl = 'https://us-central1-satya-468b9.cloudfunctions.net/notionProxy';
const response = await fetch(proxyUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        url: 'https://api.notion.com/v1/pages',
        method: 'POST',
        body: body  // Your Notion API body
    })
});
```

## 7. Test Locally (Optional)

```bash
npm run serve
```

This starts the Firebase emulator at `http://localhost:5001`.

## Troubleshooting

- **CORS errors**: Make sure your domain is in the `ALLOWED_ORIGINS` array in `index.ts`
- **401 errors**: Check your Notion API key is set correctly
- **Function not found**: Ensure deployment completed successfully

## Cost

Firebase Cloud Functions are free for the first 2 million invocations per month. For typical Satya usage, this is essentially free.

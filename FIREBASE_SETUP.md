# Firebase Setup Guide for Satya LLM Council

## Step 1: Get Your Firebase Config

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your existing Firebase project (or create a new one)
3. Click the **⚙️ Settings** icon → **Project settings**
4. Scroll down to "Your apps" section
5. If you don't have a web app yet, click **Add app** → **Web** (</> icon)
6. Register the app with a nickname like "Satya LLM Council"
7. Copy the `firebaseConfig` object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

## Step 2: Update firebase.js

1. Open `firebase.js` in your code editor
2. Find the `firebaseConfig` object (around line 24)
3. Replace the placeholder values with your actual Firebase config:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_ACTUAL_API_KEY_HERE",
    authDomain: "YOUR_ACTUAL_PROJECT.firebaseapp.com",
    projectId: "YOUR_ACTUAL_PROJECT_ID",
    storageBucket: "YOUR_ACTUAL_PROJECT.appspot.com",
    messagingSenderId: "YOUR_ACTUAL_SENDER_ID",
    appId: "YOUR_ACTUAL_APP_ID"
};
```

## Step 3: Enable Authentication

1. In Firebase Console, go to **Authentication** (left sidebar)
2. Click **Get started** (if first time)
3. Go to **Sign-in method** tab
4. Enable **Email/Password** provider:
   - Click on "Email/Password"
   - Toggle **Enable**
   - Click **Save**

## Step 4: Set Up Firestore Database

1. In Firebase Console, go to **Firestore Database** (left sidebar)
2. Click **Create database**
3. Choose **Start in production mode** (we'll add rules next)
4. Select a location (choose closest to you)
5. Click **Enable**

## Step 5: Configure Firestore Security Rules

1. In Firestore Database, go to **Rules** tab
2. Replace the default rules with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

3. Click **Publish**

## Step 6: Create Your First User

### Option A: Via Firebase Console
1. Go to **Authentication** → **Users** tab
2. Click **Add user**
3. Enter email and password
4. Click **Add user**

### Option B: Via the App
1. Deploy your changes to GitHub
2. Open the live app
3. Click **Register** button
4. Enter your email and password
5. Click OK

## Step 7: Test the Integration

1. Open the app in your browser
2. Click **Login**
3. Enter your credentials
4. You should see:
   - "✅ Logged in as your@email.com" alert
   - Your email displayed next to the Logout button
   - Console logs showing Firebase initialization

## Step 8: Share with Your Wife

1. Create a second user account:
   - Click **Logout**
   - Click **Register**
   - Use her email and password
2. Each account will have separate:
   - Research history
   - Settings (Ultra Free mode toggle)
   - Notion configuration

## Troubleshooting

### "Firebase: Error (auth/invalid-api-key)"
- Double-check your API key in `firebase.js`
- Make sure there are no extra spaces or quotes

### "Missing or insufficient permissions"
- Check Firestore security rules (Step 5)
- Make sure you're logged in

### "Module not found" errors
- Make sure `firebase.js` is in the same directory as `app.js`
- Check that `index.html` has `<script type="module" src="app.js"></script>`

### Login/Register buttons don't work
- Open browser console (F12)
- Check for any JavaScript errors
- Make sure Firebase config is correct

## What Gets Synced

✅ **Synced to Firebase (shared across devices):**
- Research history
- Ultra Free mode toggle state
- All session data

❌ **Not synced (stays in localStorage):**
- OpenRouter API key
- Notion API key & Database ID
- Filter preferences

## Next Steps

Once Firebase is working:
1. Both you and your wife can use the same URL
2. Each person logs in with their own account
3. History and preferences are kept separate
4. You can access your data from any device (just login)

---

**Need help?** Check the browser console for error messages and share them with me!

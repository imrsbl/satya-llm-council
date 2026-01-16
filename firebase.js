/* -------------------------------------------------
   firebase.js – Firebase Authentication & Firestore
   ------------------------------------------------- */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    updateDoc,
    arrayUnion
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* 👉 REPLACE WITH YOUR FIREBASE CONFIG FROM FIREBASE CONSOLE
   Go to: Firebase Console → Project Settings → Your apps → Web app
   Copy the firebaseConfig object
*/
const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

/* ---------- Auth helpers ---------- */
export async function login(email, password) {
    return await signInWithEmailAndPassword(auth, email, password);
}

export async function register(email, password) {
    return await createUserWithEmailAndPassword(auth, email, password);
}

export async function logout() {
    return await signOut(auth);
}

export { onAuthStateChanged };

/* ---------- Firestore helpers ---------- */
// Save a JSON blob under the user's document
export async function saveUserData(uid, key, data) {
    const userDoc = doc(db, "users", uid);
    await setDoc(userDoc, { [key]: data }, { merge: true });
}

// Load a JSON blob (returns undefined if missing)
export async function loadUserData(uid, key) {
    const userDoc = doc(db, "users", uid);
    const snap = await getDoc(userDoc);
    if (snap.exists()) {
        return snap.data()[key];
    }
    return undefined;
}

// Add a single history item to the user's history array
export async function addHistoryItem(uid, item) {
    const userDoc = doc(db, "users", uid);
    await updateDoc(userDoc, {
        history: arrayUnion(item)
    });
}

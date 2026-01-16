/* -------------------------------------------------
   firebase.js – Firebase Authentication & Firestore
   ------------------------------------------------- */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    updateDoc,
    arrayUnion
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDKAemYV4mD3rQ8vhIsUjTemAOXrLABL3k",
    authDomain: "satya-468b9.firebaseapp.com",
    projectId: "satya-468b9",
    storageBucket: "satya-468b9.firebasestorage.app",
    messagingSenderId: "306238210187",
    appId: "1:306238210187:web:ad32a0d035eb7f77a0d48e",
    measurementId: "G-STRKCXVEXN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

/* ---------- Auth helpers ---------- */
export async function login(email, password) {
    return await signInWithEmailAndPassword(auth, email, password);
}

export async function loginWithGoogle() {
    return await signInWithPopup(auth, googleProvider);
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

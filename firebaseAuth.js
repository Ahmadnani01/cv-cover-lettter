import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAO4CdS6VAgvCPfqujrJTM386DD-cFnPo8",
    authDomain: "cvtailor-firebase-ai-app.firebaseapp.com",
    projectId: "cvtailor-firebase-ai-app",
    storageBucket: "cvtailor-firebase-ai-app.firebasestorage.app",
    messagingSenderId: "893222305408",
    appId: "1:893222305408:web:e854a2e31a860a4542f065"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function initializeAuth(callback) {
    return onAuthStateChanged(auth, callback);
}

export async function signUp(email, password) {
    try {
        return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        throw error;
    }
}

export async function login(email, password) {
    try {
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        throw error;
    }
}

export async function logout() {
    try {
        await signOut(auth);
        return true;
    } catch (error) {
        throw error;
    }
}

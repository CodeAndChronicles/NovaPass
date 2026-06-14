// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    fetchSignInMethodsForEmail,
    onAuthStateChanged,
    signOut,
    updateProfile,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { 
    getFirestore, 
    doc, 
    setDoc,
    getDoc,
    updateDoc,
    deleteDoc,
    collection,
    query,
    where,
    orderBy,
    getDocs,
    addDoc,
    serverTimestamp,
    onSnapshot,
    deleteField,
    writeBatch,        // ✅ أضف هذا
    DocumentReference,
    arrayUnion,
    arrayRemove
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIGMq-_pffTwF7wOmNcDdYuufSNC_G2yY",
    authDomain: "novapass-7ac68.firebaseapp.com",
    projectId: "novapass-7ac68",
    storageBucket: "novapass-7ac68.firebasestorage.app",
    messagingSenderId: "100478066092",
    appId: "1:100478066092:web:f7eed061c19ec119b62e09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

import { getDatabase, ref, set, onValue, remove, get } from 
  "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";

const rtdb = getDatabase(app);
export { rtdb, ref, set, onValue, remove, get };

// Export everything
export { 
    app, 
    auth, 
    db,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    fetchSignInMethodsForEmail,
    onAuthStateChanged,
    signOut,
    updateProfile,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider,
    doc, 
    setDoc,
    getDoc,
    updateDoc,
    deleteDoc,
    collection,
    query,
    where,
    orderBy,
    getDocs,
    addDoc,
    serverTimestamp,
    onSnapshot,
    deleteField,
    writeBatch,        // ✅ أضف هذا
    DocumentReference,
    arrayUnion,
    arrayRemove
};

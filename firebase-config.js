// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  onAuthStateChanged,
  signOut // ← أضف هذا
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc,
  serverTimestamp
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

// Export everything
export { 
  app, 
  auth, 
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  onAuthStateChanged,
  signOut, // ← أضف هذا
  doc, 
  setDoc,
  serverTimestamp
};
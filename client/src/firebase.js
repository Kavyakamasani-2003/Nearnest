// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";         // Optional
import { getAuth } from "firebase/auth";                  // For user login
import { getFirestore } from "firebase/firestore";        // For products, orders
import { getStorage } from "firebase/storage";            // For product images
import { getFunctions } from "firebase/functions";        // For backend logic

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA0y4lO5M0F4W5p-yBvJfZ0uVzxTh9CORA",
  authDomain: "nearnest-2025-bba9d.firebaseapp.com",
  projectId: "nearnest-2025-bba9d",
  storageBucket: "nearnest-2025-bba9d.firebasestorage.app",
  messagingSenderId: "568380195780",
  appId: "1:568380195780:web:cf82722747fabc10b91a91",
  measurementId: "G-T8GDKGKGCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions(app);
const analytics = getAnalytics(app);  // Optional

// Export services
export { app, auth, db, storage, functions, analytics };
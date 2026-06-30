// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAWpbHmyT3n_AiESQp8FNcFII2kyfVmdls",
  authDomain: "helphub-83dc5.firebaseapp.com",
  projectId: "helphub-83dc5",
  storageBucket: "helphub-83dc5.firebasestorage.app",
  messagingSenderId: "635897746404",
  appId: "1:635897746404:web:2ef295c024785ac773adf1",
  measurementId: "G-0C8TKM1WEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore
const db = getFirestore(app);

export { db };
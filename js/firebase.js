// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqMJxuDYLHdom6EjLRVBIKi5zrEF0rpVU",
  authDomain: "efootball-bd-club-2026.firebaseapp.com",
  projectId: "efootball-bd-club-2026",
  storageBucket: "efootball-bd-club-2026.firebasestorage.app",
  messagingSenderId: "837585006779",
  appId: "1:837585006779:web:ad0127f31838b72136b99e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

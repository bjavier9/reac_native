import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWT8VEW3lkNV7PhfbCZEauykLQ0akV1Dg",
  authDomain: "prueba-curso-45df5.firebaseapp.com",
  projectId: "prueba-curso-45df5",
  storageBucket: "prueba-curso-45df5.appspot.com",
  messagingSenderId: "165176021816",
  appId: "1:165176021816:web:977c7c027244909544e7cd"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
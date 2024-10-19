// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9f245.firebaseapp.com",
  projectId: "mern-estate-9f245",
  storageBucket: "mern-estate-9f245.appspot.com",
  messagingSenderId: "535990310954",
  appId: "1:535990310954:web:1be5a0c5c232af1ed24b53"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
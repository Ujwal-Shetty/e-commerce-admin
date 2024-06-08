// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "e-commerce-fac31.firebaseapp.com",
  projectId: "e-commerce-fac31",
  storageBucket: "e-commerce-fac31.appspot.com",
  messagingSenderId: "358610914565",
  appId: "1:358610914565:web:afb07f486c528355d5bb6c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
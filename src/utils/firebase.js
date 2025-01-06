// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByiS53dKZIlMG4lWI_97YZNYJOuv65SWc",
  authDomain: "netflixgpt-a9437.firebaseapp.com",
  projectId: "netflixgpt-a9437",
  storageBucket: "netflixgpt-a9437.firebasestorage.app",
  messagingSenderId: "807297630573",
  appId: "1:807297630573:web:8acbf5cae571b5c8945a64",
  measurementId: "G-VMKG5W86VG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// instead of creating auth on every component auth is created in a centeralized place and exported
export const auth = getAuth(); 
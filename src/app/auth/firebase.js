// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJnoElXrqh-aF2R-pbCNorkVA7Q0lcjkM",
  authDomain: "anchor-1c6e5.firebaseapp.com",
  projectId: "anchor-1c6e5",
  storageBucket: "anchor-1c6e5.firebasestorage.app",
  messagingSenderId: "276562872755",
  appId: "1:276562872755:web:001682c66546430c73a3c6",
  measurementId: "G-0PV9PX943R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

isSupported().then((supported) => {
  if (supported) {
    getAnalytics(app);
  }
});

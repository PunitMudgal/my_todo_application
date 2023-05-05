// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  // appId: process.env.REACT_APP_APP_ID,
  apiKey: "AIzaSyCzs_C3-CLE7mOM6QatyJGfEr-9-K1IqwM",
  authDomain: "todoapp-a4cb4.firebaseapp.com",
  projectId: "todoapp-a4cb4",
  storageBucket: "todoapp-a4cb4.appspot.com",
  messagingSenderId: "743742885416",
  appId: "1:743742885416:web:117ae2762c993332522f1d",
  measurementId: "G-2K52MKDSS1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);
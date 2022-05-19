// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9nbLdF2OeUH2yefDIHPT0I1bfugwrSlg",
  authDomain: "router-firebase-integretion.firebaseapp.com",
  projectId: "router-firebase-integretion",
  storageBucket: "router-firebase-integretion.appspot.com",
  messagingSenderId: "316148891975",
  appId: "1:316148891975:web:7ff922d92fdee293ae8c62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7Fj84v3tjK5zjYQVYtUH1ZGpV0OAAa6I",
  authDomain: "netflixclone-510c8.firebaseapp.com",
  projectId: "netflixclone-510c8",
  storageBucket: "netflixclone-510c8.appspot.com",
  messagingSenderId: "1022331485219",
  appId: "1:1022331485219:web:ec5dfe671f70081cbb4596",
  measurementId: "G-L83KEMGK9Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

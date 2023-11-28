// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRwKam2DQTikSTPMt5LMW0USn5Xb5UCIg",
  authDomain: "password-manager-47ec8.firebaseapp.com",
  projectId: "password-manager-47ec8",
  storageBucket: "password-manager-47ec8.appspot.com",
  messagingSenderId: "579934435468",
  appId: "1:579934435468:web:852a9651545f4bfb8fa3a9",
  measurementId: "G-125T8SWETE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'




// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA0PNjI_PwYz60jpzkNmZAtWI7Fm556UCU",
  authDomain: "react-firebase-9fd01.firebaseapp.com",
  projectId: "react-firebase-9fd01",
  storageBucket: "react-firebase-9fd01.appspot.com",
  messagingSenderId: "713492508944",
  appId: "1:713492508944:web:1e45e43c14142a95847595",
  measurementId: "G-0RH6GMBETH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
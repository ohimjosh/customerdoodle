// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF3QGG2gyOsKkCLVJ8HlAodRA3DI5A0jE",
  authDomain: "customerdoodle.firebaseapp.com",
  projectId: "customerdoodle",
  storageBucket: "customerdoodle.appspot.com",
  messagingSenderId: "233406240804",
  appId: "1:233406240804:web:152a7cd09fb4f26d6ae0b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
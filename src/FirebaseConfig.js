// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBulJ7qYFzsneBd7KZcCm0U3Kl6NnAWyxg",
  authDomain: "rogindemo.firebaseapp.com",
  projectId: "rogindemo",
  storageBucket: "rogindemo.appspot.com",
  messagingSenderId: "906129241046",
  appId: "1:906129241046:web:6b87f4a618886118ebaa77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

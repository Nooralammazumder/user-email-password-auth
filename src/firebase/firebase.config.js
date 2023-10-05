// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWvi-X5zxW2RPBWzkvWYwxwrp0GfcJkqw",
  authDomain: "user-email-password-auth-8b2e7.firebaseapp.com",
  projectId: "user-email-password-auth-8b2e7",
  storageBucket: "user-email-password-auth-8b2e7.appspot.com",
  messagingSenderId: "988265913523",
  appId: "1:988265913523:web:2e51c42b89b3983a2224c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

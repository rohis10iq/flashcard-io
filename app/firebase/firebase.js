// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvFV8VplgMa8-hJitzx6Y1HgTeQ6cOrD0",
  authDomain: "flashcards-io.firebaseapp.com",
  projectId: "flashcards-io",
  storageBucket: "flashcards-io.appspot.com",
  messagingSenderId: "978342528786",
  appId: "1:978342528786:web:772766f9abae62237595cb",
  measurementId: "G-T8SVQW6JMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
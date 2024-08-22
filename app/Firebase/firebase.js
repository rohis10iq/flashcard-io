
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyCvFV8VplgMa8-hJitzx6Y1HgTeQ6cOrD0",
  authDomain: "flashcards-io.firebaseapp.com",
  projectId: "flashcards-io",
  storageBucket: "flashcards-io.appspot.com",
  messagingSenderId: "978342528786",
  appId: "1:978342528786:web:772766f9abae62237595cb",
  measurementId: "G-T8SVQW6JMQ"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
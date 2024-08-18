"use client";

import { useRouter } from "next/navigation";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebase/firebase";
import Features from "./components/Features";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

export default function Home() {
    const router = useRouter();
    const auth = getAuth(app); // Initialize Firebase Authentication
    const provider = new GoogleAuthProvider();
  
    const handleContinue = () => {
      router.push("./flashcards");
    };
  
    const handleSignIn = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        
        router.push("/flashcards"); 
      } catch (error) {
        console.error("Error during sign-in:", error);
        alert("Failed to sign in. Please try again.");
      }
    };

  return (
    <div className="bg-gray-900 text-white">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-9xl font-bold text-center mb-4 gradient-text">QuantumFlash</h1>
        <p className="text-4xl font-bold text-gray-400 mb-8 gradient-text-p">Flashcards to make your life easier.</p>
        <div className="flex space-x-6">
          <button className="button py-3 px-6 rounded-lg font-bold shadow-md text-xl" onClick={handleSignIn}>Sign In</button>
          <button className="button-2 py-3 px-6 rounded-lg font-bold shadow-md text-xl" onClick={handleContinue}>Continue without Signing In</button>
        </div>
      </div>
      <Features />
      <About />
      <Pricing />
      <Contact />
    </div>
  );
}

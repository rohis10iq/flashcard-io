"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-[#723ff3]">QuantumFlash</Link>
        </div>
        <button onClick={toggleMenu} className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className={`md:flex items-center space-x-6 ${isOpen ? "block" : "hidden"}`}>
          <Link href="#features" className="hover:text-[#723ff3]">Features</Link>
          <Link href="#about" className="hover:text-[#723ff3]">About</Link>
          <Link href="#pricing" className="hover:text-[#723ff3]">Pricing</Link>
          <Link href="#contact" className="hover:text-[#723ff3]">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

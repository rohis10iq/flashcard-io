import "./styles/globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "QuantumFlash.io",
  description: "Flashcards to make your life easier.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-900 text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

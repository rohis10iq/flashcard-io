"use client";

export default function Features() {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">AI-Powered Flashcards</h3>
            <p>Automatically generate flashcards using advanced AI algorithms.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Customizable Sets</h3>
            <p>Create and organize your flashcard sets according to your needs.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Study Anywhere</h3>
            <p>Access your flashcards from any device, anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

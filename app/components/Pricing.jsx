"use client";

export default function Pricing() {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Free Plan</h3>
            <p>Access basic features for free, perfect for casual learners.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
            <p>Unlock advanced features and unlimited flashcard sets for a small monthly fee.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Enterprise Plan</h3>
            <p>Customized solutions for organizations and educational institutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

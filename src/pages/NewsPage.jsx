// src/pages/NewsPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NewsPage() {
  return (
    <main className="bg-white text-charcoal min-h-screen font-sans px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-red-primary text-center mb-10">
        Immigration News & Travel Updates
      </h1>

      <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Article 1 */}
        <article className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-red-primary mb-2">
            <Link to="/news/lulu-hypermarket-dubai-visa-sponsorship">
              Lulu Hypermarket Jobs in Dubai with Visa Sponsorship
            </Link>
          </h2>
          <p className="text-sm text-gray-700">
            Explore exciting job openings at Lulu Hypermarket in Dubai. Learn how to apply and secure visa sponsorship as an international applicant.
          </p>
          <Link
            to="/news/lulu-hypermarket-dubai-visa-sponsorship"
            className="text-sm text-red-primary mt-2 inline-block hover:underline"
          >
            Read more →
          </Link>
        </article>

        {/* Article 2 */}
        <article className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-red-primary mb-2">
            <Link to="/news/uk-evisa-replaces-visa-stickers">
              UK Introduces eVisa for Skilled Workers and Students
            </Link>
          </h2>
          <p className="text-sm text-gray-700">
            The UK Home Office announces the replacement of physical visa stickers with digital eVisas. Here’s what international travelers should know.
          </p>
          <Link
            to="/news/uk-evisa-replaces-visa-stickers"
            className="text-sm text-red-primary mt-2 inline-block hover:underline"
          >
            Read more →
          </Link>
        </article>
      </section>
    </main>
  );
}

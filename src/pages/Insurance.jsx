// src/pages/Insurance.jsx
import React from "react";

export default function Insurance() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-red-primary mb-4">Travel Insurance</h1>
      <p className="text-gray-700">
        Buy all types of travel insurance — health, student, tourist, business — directly from us.
        Coverage is instant, global, and reliable.
      </p>
      <div className="mt-6">
        <a
          href="https://your-insurance-provider.com" // Replace with actual link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-primary text-white font-semibold px-6 py-3 rounded hover:bg-red-700 transition"
        >
          Get Travel Insurance
        </a>
      </div>
    </div>
  );
}

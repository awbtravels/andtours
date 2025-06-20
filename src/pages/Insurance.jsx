// src/pages/Insurance.jsx
import React from "react";

export default function Insurance() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-charcoal">
      <h1 className="text-3xl font-bold text-red-primary mb-4">Travel Insurance</h1>
      <p className="mb-6 text-lg">
        Secure your travel with our reliable insurance plans tailored for all travelers.
        AWB Travels and Tours offers different types of travel insurance for your needs.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-base">
        <li>✈️ <strong>Medical Travel Insurance</strong> – for health-related emergencies abroad</li>
        <li>🎓 <strong>Student Travel Insurance</strong> – coverage for students traveling abroad</li>
        <li>💼 <strong>Business Travel Insurance</strong> – protect your corporate journeys</li>
        <li>🌍 <strong>Tourist Insurance</strong> – for short vacation or leisure trips</li>
        <li>🧳 <strong>Baggage & Delay Protection</strong> – coverage for lost luggage or trip interruptions</li>
      </ul>

      <p className="mt-6 text-lg font-medium">
        🛡️ All policies are underwritten by top insurance providers.
        <br />
        💬 Contact us to choose the right plan or <a href="/consultation" className="text-red-primary underline">book a consultation</a>.
      </p>
    </div>
  );
}

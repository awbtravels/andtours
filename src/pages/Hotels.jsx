// src/pages/Hotels.jsx
import React from "react";

export default function Hotels() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-red-primary mb-4">Hotel Reservations</h1>
      <p className="text-gray-700">
        Find and book top-rated hotels globally with our seamless booking system.
        Guaranteed comfort, affordable rates, and instant confirmations.
      </p>
      <div className="mt-6">
        <iframe
          src="https://www.hotellook.com/" // Replace with your affiliate URL
          title="Hotel Booking"
          width="100%"
          height="600"
          className="rounded-lg border"
        />
      </div>
    </div>
  );
}

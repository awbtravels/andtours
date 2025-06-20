// src/pages/Flights.jsx
import React from "react";

export default function Flights() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-red-primary mb-4">Book Your Flight</h1>
      <p className="text-gray-700">
        Easily book local and international flights directly through our trusted platforms.
        AWB Travels and Tours provides flexible travel options at the best prices.
      </p>
      <div className="mt-6">
        <iframe
          src="https://www.aviasales.com/" // Replace with your affiliate URL
          title="Flight Booking"
          width="100%"
          height="600"
          className="rounded-lg border"
        />
      </div>
    </div>
  );
}

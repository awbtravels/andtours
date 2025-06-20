// src/pages/Team.jsx
import React from "react";

export default function Team() {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold text-red-primary mb-4">Meet Our Team</h1>
      <p className="text-gray-700 mb-4">
        Our dynamic team consists of passionate professionals with extensive experience in travel and customer service.
      </p>
      <ul className="text-gray-700 space-y-2">
        <li><strong>CEO:</strong> Hon. Amos Ajibola (hon.amos@awbtravelsandtours.com)</li>
        <li><strong>General Manager:</strong> Sikemi Akinnibo (gmsikemi@awbtravelsandtours.com)</li>
        <li><strong>HR Manager:</strong> Abigael Akindiya (hr@awbtravelsandtours.com)</li>
        <li><strong>Customer Service Lead:</strong> Grace Akins (customerservice@awbtravelsandtours.com)</li>
      </ul>
    </section>
  );
}

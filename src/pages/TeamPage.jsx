// src/pages/TeamPage.jsx
import React from "react";

export default function TeamPage() {
  return (
    <main className="bg-white text-charcoal min-h-screen px-6 py-12 font-sans">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-red-primary text-center mb-10">
          Meet Our Team
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base">
          {/* CEO */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-red-primary">Hon. Amos Ajibola</h2>
            <p className="text-gray-700">Chief Executive Officer</p>
            <p className="text-sm text-blue-700">hon.amos@awbtravelsandtours.com</p>
          </div>

          {/* General Manager */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-red-primary">Sikemi Akinnibo</h2>
            <p className="text-gray-700">General Manager</p>
            <p className="text-sm text-blue-700">gmsikemi@awbtravelsandtours.com</p>
          </div>

          {/* Human Resources */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-red-primary">Abigael Akindiya</h2>
            <p className="text-gray-700">Human Resources</p>
            <p className="text-sm text-blue-700">hr@awbtravelsandtours.com</p>
          </div>

          {/* Customer Service Lead */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-red-primary">Grace Akins</h2>
            <p className="text-gray-700">Customer Service Lead</p>
            <p className="text-sm text-blue-700">customerservice@awbtravelsandtours.com</p>
            <p className="text-sm text-gray-800 mt-2">📞 +2348102985914</p>
          </div>
        </div>
      </section>
    </main>
  );
}

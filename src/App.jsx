import React from "react";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-red-primary">
          Test Icons on AWB Travels Website
        </h1>
        <p className="text-center">Scroll to the bottom to see if social icons appear.</p>
      </main>
      <Footer />
    </div>
  );
}

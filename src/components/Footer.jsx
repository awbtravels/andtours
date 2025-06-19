// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-6">
      <h2 className="text-lg font-bold mb-2">Test Icons</h2>
      <div className="flex space-x-4 text-2xl">
        <FaInstagram className="text-pink-500" />
        <FaFacebookF className="text-blue-500" />
      </div>
    </footer>
  );
}

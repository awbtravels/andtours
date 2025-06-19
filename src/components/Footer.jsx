import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-6">
      <h2 className="text-lg font-bold mb-3">Follow Us</h2>
      <div className="flex gap-4 text-2xl">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF className="hover:text-red-primary" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram className="hover:text-red-primary" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter className="hover:text-red-primary" />
        </a>
      </div>
    </footer>
  );
}

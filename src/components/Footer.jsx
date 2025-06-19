// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ background: "#222", color: "#fff", padding: "2rem" }}>
      <h2>Social Icons Test</h2>
      <div style={{ fontSize: "2rem", display: "flex", gap: "1rem" }}>
        <FaInstagram />
        <FaFacebookF />
        <FaWhatsapp />
      </div>
    </footer>
  );
}

// src/components/Footer.jsx
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaTiktok,
  FaTwitter,
  FaLinkedin,
  FaYelp,
  FaPinterest,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

        {/* Contact Info */}
        <div>
          <h4 className="text-red-primary text-lg font-semibold mb-4">Contact Us</h4>
          <p className="mb-2">📍 Head Office:</p>
          <p className="mb-2">Express Way, Adj. Mardie Grazz Alao Akala, New Garage Road, Ibadan 200257, Nigeria.</p>
          <p className="mb-2">📍 Lagos Branch:</p>
          <p className="mb-2">Block F1, Shop 13, Bola Ahmed Tinubu Rd, Complex, Ojokoro 100005, Lagos, Nigeria.</p>
          <p className="mb-2">📞 +2348026028245</p>
          <p className="mb-2">📞 +2348102985914</p>
          <p className="mb-2">📧 info@awbtravelsandtours.com</p>
          <p className="mb-2">📧 customerservice@awbtravelsandtours.com</p>
          <p className="mb-2">⏰ Mon - Fri: 9am - 5pm</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-red-primary text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-red-primary">About Us</a></li>
            <li><a href="/team" className="hover:text-red-primary">Our Team</a></li>
            <li><a href="/consultation" className="hover:text-red-primary">Booking Consultation</a></li>
            <li><a href="/news" className="hover:text-red-primary">Travel News</a></li>
            <li><a href="/insurance" className="hover:text-red-primary">Travel Insurance</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-red-primary text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex flex-wrap gap-4 text-lg">
            <a href="https://www.facebook.com/share/1Adryh8WSU/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook className="hover:text-red-primary" />
            </a>
            <a href="https://www.instagram.com/awbtravelsandtours_ltd?igsh=NmZ1cG85bjdqYzg4&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram className="hover:text-red-primary" />
            </a>
            <a href="https://wa.me/2348026028245" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className="hover:text-red-primary" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="hover:text-red-primary" />
            </a>
            <a href="#" aria-label="TikTok">
              <FaTiktok className="hover:text-red-primary" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="hover:text-red-primary" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-red-primary" />
            </a>
            <a href="#" aria-label="Yelp">
              <FaYelp className="hover:text-red-primary" />
            </a>
            <a href="https://www.pinterest.com/awbtravelsandtours/" target="_blank" rel="noreferrer" aria-label="Pinterest">
              <FaPinterest className="hover:text-red-primary" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} AWB Travels and Tours Ltd. All rights reserved.
      </div>
    </footer>
  );
}

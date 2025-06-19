// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white px-6 pt-10 pb-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

        {/* Company Info */}
        <div>
          <h4 className="font-bold text-red-primary mb-3">AWB Travels and Tours Ltd</h4>
          <p>RC: 7177769</p>
          <p className="mt-2 italic">...fulfilling your dream life</p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-red-primary mb-3">Contact</h4>
          <p>📍 Head Office: Express Way, Adj. Mardie Grazz Alao Akala, New Garage Road, Ibadan 200257, Nigeria</p>
          <p>📍 Lagos Branch: Block F1, Shop 13, Bola Ahmed Tinubu Rd, Complex, Ojokoro 100005</p>
          <p>📞 +2348026028245</p>
          <p>📞 +2348102985914</p>
          <p>✉️ info@awbtravelsandtours.com</p>
          <p>✉️ customerservice@awbtravelsandtours.com</p>
          <p>🕘 Mon - Fri: 9am - 5pm</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-red-primary mb-3">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-red-primary">Home</a></li>
            <li><a href="/about" className="hover:text-red-primary">About</a></li>
            <li><a href="/consultation" className="hover:text-red-primary">Consultation</a></li>
            <li><a href="/insurance" className="hover:text-red-primary">Insurance</a></li>
            <li><a href="/team" className="hover:text-red-primary">Our Team</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-bold text-red-primary mb-3">Connect With Us</h4>
          <ul className="space-y-1">
            <li><a href="https://www.instagram.com/awb_travelsandtoursltd" target="_blank" rel="noopener noreferrer" className="hover:text-red-primary">📸 Instagram</a></li>
            <li><a href="https://www.facebook.com/AwbTravelsandToursLtd" target="_blank" rel="noopener noreferrer" className="hover:text-red-primary">📘 Facebook</a></li>
            <li><a href="https://x.com/AwbTravelsnTour" target="_blank" rel="noopener noreferrer" className="hover:text-red-primary">🐦 Twitter</a></li>
            <li><a href="https://wa.me/message/WFMJG5NMTXMGN1" target="_blank" rel="noopener noreferrer" className="hover:text-red-primary">💬 WhatsApp</a></li>
            <li><a href="https://www.linkedin.com/in/awb-travles-and-tours-ltd-a717442b5" target="_blank" rel="noopener noreferrer" className="hover:text-red-primary">💼 LinkedIn</a></li>
            <li><a href="https://www.tiktok.com/@awb_travels_and_toursltd" target="_blank" rel="noopener noreferrer" className="hover:text-red-primary">🎵 TikTok</a></li>
            <li><a href="http://www.youtube.com/@AWBTRAVELSAndToursLTD-pf5qf" target="_blank" rel="noopener noreferrer" className="hover:text-red-primary">▶️ YouTube</a></li>
            <li><a href="https://www.yelp.com/user_details?userid=J0gFE-D10yQPtY9cKX9thA" target="_blank" rel="noopener noreferrer" className="hover:text-red-primary">⭐ Yelp</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-gray-400">
        &copy; {new Date().getFullYear()} AWB Travels and Tours Ltd. All rights reserved.
      </div>
    </footer>
  );
}

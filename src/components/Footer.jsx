// src/components/Footer.jsx
import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
  FaTiktok,
  FaTwitter,
  FaLinkedin,
  FaYelp,
  FaPinterest
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-10 px-6 md:px-20 text-sm">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div>
          <h3 className="text-lg font-semibold text-red-primary">AWB Travels and Tours Ltd</h3>
          <p className="text-gray-300">RC: 7177769</p>
          <p className="mt-2 text-xs italic text-gray-400">...fulfilling your dream life</p>
        </div>

        <div>
          <h4 className="text-red-primary font-semibold mb-2">Contact</h4>
          <p>📍 Head Office: Express Way, Adj. Mardie Grazz Alao Akala, New Garage Road, Ibadan 200257, Nigeria</p>
          <p>📍 Lagos Branch: Block F1, Shop 13, Bola Ahmed Tinubu Rd, Complex, Ojokoro 100005</p>
          <p>📞 +2348026028245</p>
          <p>📞 +2348102985914</p>
          <p>📧 info@awbtravelsandtours.com</p>
          <p>📧 customerservice@awbtravelsandtours.com</p>
          <p>🕒 Mon - Fri: 9am - 5pm</p>
        </div>

        <div>
          <h4 className="text-red-primary font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About</li>
            <li>Consultation</li>
            <li>Insurance</li>
            <li>Our Team</li>
          </ul>
        </div>

        <div>
          <h4 className="text-red-primary font-semibold mb-2">Connect With Us</h4>
          <ul className="space-y-1">
            <li><a href="https://www.instagram.com/awbtravelsandtours_ltd?igsh=NmZ1cG85bjdqYzg4&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
            <li><a href="https://www.facebook.com/share/1Adryh8WSU/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a></li>
            <li><a href="https://wa.me/message/WFMJG5NMTXMGN1" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a></li>
            <li><a href="http://www.youtube.com/@AWBTRAVELSAndToursLTD-pf5qf" target="_blank" rel="noopener noreferrer"><FaYoutube /> YouTube</a></li>
            <li><a href="https://www.tiktok.com/@awb_travels_and_toursltd" target="_blank" rel="noopener noreferrer"><FaTiktok /> TikTok</a></li>
            <li><a href="https://x.com/AwbTravelsnTour?t=ArfjB" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a></li>
            <li><a href="https://www.linkedin.com/in/awb-travles-and-tours-ltd-a717442b5" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a></li>
            <li><a href="https://www.yelp.com/user_details?userid=J0gFE-D10yQPtY9cKX9thA" target="_blank" rel="noopener noreferrer"><FaYelp /> Yelp</a></li>
            <li><a href="https://www.pinterest.com/awbtravelsandtours/" target="_blank" rel="noopener noreferrer"><FaPinterest /> Pinterest</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400">
        © 2025 AWB Travels and Tours Ltd. All rights reserved.
      </div>
    </footer>
  );
}

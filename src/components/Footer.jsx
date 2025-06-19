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

        {/* Company Info */}
        <div>
          <h4 className="text-lg font-semibold text-red-primary mb-2">
            AWB Travels and Tours Ltd
          </h4>
          <p className="text-sm">RC: 7177769</p>
          <p className="italic text-xs mt-1">...fulfilling your dream life</p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-red-primary mb-2">Contact</h4>
          <p>📍 Ibadan: Express Way, Adj. Mardie Grazz Alao Akala, New Garage Rd</p>
          <p>📍 Lagos: Block F1, Shop 13, Bola Ahmed Tinubu Rd, Ojokoro</p>
          <p>📞 +2348026028245</p>
          <p>📞 +2348102985914</p>
          <p>📧 info@awbtravelsandtours.com</p>
          <p>📧 customerservice@awbtravelsandtours.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-red-primary mb-2">Connect With Us</h4>
          <div className="flex flex-wrap gap-4 text-lg">
            <a href="https://www.instagram.com/awbtravelsandtours_ltd?igsh=NmZ1cG85bjdqYzg4&utm_source=qr" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-red-primary" />
            </a>
            <a href="https://www.facebook.com/share/1Adryh8WSU/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-red-primary" />
            </a>
            <a href="https://wa.me/2348026028245" target="_blank" rel="noreferrer">
              <FaWhatsapp className="hover:text-red-primary" />
            </a>
            <a href="#" className="hover:text-red-primary"><FaYoutube /></a>
            <a href="#" className="hover:text-red-primary"><FaTiktok /></a>
            <a href="#" className="hover:text-red-primary"><FaTwitter /></a>
            <a href="#" className="hover:text-red-primary"><FaLinkedin /></a>
            <a href="#" className="hover:text-red-primary"><FaYelp /></a>
            <a href="https://www.pinterest.com/awbtravelsandtours/" target="_blank" rel="noreferrer">
              <FaPinterest className="hover:text-red-primary" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} AWB Travels and Tours Ltd. All rights reserved.
      </div>
    </footer>
  );
}

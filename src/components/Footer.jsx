import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaWhatsapp,
  FaYoutube,
  FaTiktok,
  FaTwitter,
  FaLinkedinIn,
  FaYelp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <img src="/logo.png" alt="AWB Logo" className="h-12 mb-3" />
          <p className="mb-2 font-semibold">AWB Travels and Tours Ltd</p>
          <p>RC: 7177769</p>
          <p>...fulfilling your dream life</p>
        </div>

        {/* Contact Info */}
        <div>
          <p className="font-semibold mb-2 text-red-primary">Contact Us</p>
          <p>Ibadan Office: Express Way, Adj. Mardie Grazz Alao Akala, New Garage Rd, Ibadan 200257</p>
          <p>Lagos Branch: Block F1, Shop 13, Bola Ahmed Tinubu Rd Complex, Ojokoro 100005</p>
          <p className="mt-2">Phone: +2348026028245, +2348102985914</p>
          <p>Email: info@awbtravelsandtours.com</p>
        </div>

        {/* Social Links */}
        <div>
          <p className="font-semibold mb-2 text-red-primary">Follow Us</p>
          <div className="flex flex-wrap gap-3 text-lg">
            <a href="https://www.facebook.com/share/1Adryh8WSU/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/awbtravelsandtours_ltd?igsh=NmZ1cG85bjdqYzg4&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.pinterest.com/awbtravelsandtours/" target="_blank" rel="noopener noreferrer"><FaPinterestP /></a>
            <a href="https://wa.me/2348026028245" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://yelp.com" target="_blank" rel="noopener noreferrer"><FaYelp /></a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} AWB Travels and Tours Ltd. All rights reserved.
      </div>
    </footer>
  );
}

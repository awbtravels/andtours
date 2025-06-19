// src/components/Footer.jsx import React from "react"; import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaTwitter, FaLinkedin, FaWhatsapp, FaYelp, FaPinterest, } from "react-icons/fa";

export default function Footer() { return ( <footer className="bg-charcoal text-white text-sm px-6 pt-10 pb-6"> <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"> {/* Company Info */} <div> <h4 className="text-lg font-semibold text-red-primary mb-2"> AWB Travels and Tours Ltd </h4> <p>RC: 7177769</p> <p className="italic">...fulfilling your dream life</p> </div>

{/* Contact */}
    <div>
      <h4 className="text-lg font-semibold text-red-primary mb-2">Contact</h4>
      <p>📍 Head Office: Express Way, Adj. Mardie Grazz Alao Akala, New Garage Road,
        Ibadan 200257, Nigeria.
      </p>
      <p>📍 Lagos Branch: Block F1, Shop 13, Bola Ahmed Tinubu Rd, Complex, Ojokoro 100005</p>
      <p>📞 +2348026028245</p>
      <p>✉ info@awbtravelsandtours.com</p>
      <p>customerservice@awbtravelsandtours.com</p>
      <p>🕑 Mon - Fri: 9am - 5pm</p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-lg font-semibold text-red-primary mb-2">Quick Links</h4>
      <ul className="space-y-1">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/consultation" className="hover:underline">Consultation</a></li>
        <li><a href="/insurance" className="hover:underline">Insurance</a></li>
        <li><a href="/services" className="hover:underline">Our Services</a></li>
        <li><a href="/team" className="hover:underline">Our Team</a></li>
        <li><a href="/news" className="hover:underline">News</a></li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h4 className="text-lg font-semibold text-red-primary mb-2">Connect With Us</h4>
      <ul className="space-y-1">
        <li><a href="https://www.instagram.com/awbtravelsandtours_ltd?igsh=NmZ1cG85bjdqYzg4&utm_source=qr" target="_blank" className="flex items-center gap-2 hover:underline"><FaInstagram /> Instagram</a></li>
        <li><a href="https://www.facebook.com/share/1Adryh8WSU/?mibextid=wwXIfr" target="_blank" className="flex items-center gap-2 hover:underline"><FaFacebookF /> Facebook</a></li>
        <li><a href="https://wa.me/message/WFMJG5NMTXMGN1" target="_blank" className="flex items-center gap-2 hover:underline"><FaWhatsapp /> WhatsApp</a></li>
        <li><a href="https://twitter.com/AwbTravelsnTour" target="_blank" className="flex items-center gap-2 hover:underline"><FaTwitter /> Twitter</a></li>
        <li><a href="https://www.linkedin.com/in/awb-travles-and-tours-ltd-a717442b5/" target="_blank" className="flex items-center gap-2 hover:underline"><FaLinkedin /> LinkedIn</a></li>
        <li><a href="https://www.tiktok.com/@awb_travels_and_toursltd?_t=8kKUH7JZQ0c&_r=1" target="_blank" className="flex items-center gap-2 hover:underline"><FaTiktok /> TikTok</a></li>
        <li><a href="http://www.youtube.com/@AWBTRAVELSAndToursLTD-pf5qf" target="_blank" className="flex items-center gap-2 hover:underline"><FaYoutube /> YouTube</a></li>
        <li><a href="https://www.yelp.com/user_details?userid=J0gFE-D10yQPtY9cKX9thA" target="_blank" className="flex items-center gap-2 hover:underline"><FaYelp /> Yelp</a></li>
        <li><a href="https://www.pinterest.com/awbtravelsandtours/" target="_blank" className="flex items-center gap-2 hover:underline"><FaPinterest /> Pinterest</a></li>
      </ul>
    </div>
  </div>

  {/* Copyright */}
  <div className="text-center text-xs mt-10 border-t border-gray-700 pt-4">
    &copy; {new Date().getFullYear()} AWB Travels and Tours Ltd. All rights reserved.
  </div>
</footer>

); }

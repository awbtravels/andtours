// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white px-6 py-8 text-sm">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold text-red-primary mb-2">AWB Travels and Tours Ltd</h3>
          <p>RC: 7177769</p>
          <p>Fulfilling your dream life.</p>
          <p>Head Office: Express Way, Adj. Mardie Grazz Alao Akala, New Garage Road, Ibadan 200257, Nigeria.</p>
          <p>Branch: Block F1, Shop 13, Bola Ahmed Tinubu Rd, Complex, Ojokoro 100005, Lagos, Nigeria.</p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-red-primary mb-2">Contact Us</h4>
          <p>Email: <a href="mailto:awbtravelsntours@outlook.com" className="hover:underline">awbtravelsntours@outlook.com</a></p>
          <p>Email: <a href="mailto:info@awbtravelsandtours.com" className="hover:underline">info@awbtravelsandtours.com</a></p>
          <p>Email: <a href="mailto:customerservice@awbtravelsandtours.com" className="hover:underline">customerservice@awbtravelsandtours.com</a></p>
          <p>Phone: <a href="tel:+2348026028245" className="hover:underline">+234 802 602 8245</a></p>
          <p>Open: Mon - Fri, 9am - 5pm</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-red-primary mb-2">Follow Us</h4>
          <ul className="space-y-1">
            <li><a href="https://www.linkedin.com/in/awb-travles-and-tours-ltd-a717442b5/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
            <li><a href="http://www.youtube.com/@AWBTRAVELSAndToursLTD-pf5qf" target="_blank" rel="noreferrer" className="hover:underline">YouTube</a></li>
            <li><a href="https://x.com/AwbTravelsnTour" target="_blank" rel="noreferrer" className="hover:underline">Twitter</a></li>
            <li><a href="https://www.facebook.com/AwbTravelsandToursLtd" target="_blank" rel="noreferrer" className="hover:underline">Facebook</a></li>
            <li><a href="https://www.instagram.com/awb_travelsandtoursltd" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a></li>
            <li><a href="https://www.tiktok.com/@awb_travels_and_toursltd" target="_blank" rel="noreferrer" className="hover:underline">TikTok</a></li>
            <li><a href="https://www.yelp.com/user_details?userid=J0gFE-D10yQPtY9cKX9thA" target="_blank" rel="noreferrer" className="hover:underline">Yelp</a></li>
            <li><a href="https://wa.me/message/WFMJG5NMTXMGN1" target="_blank" rel="noreferrer" className="hover:underline">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-400 text-xs mt-6">
        &copy; {new Date().getFullYear()} AWB Travels and Tours Ltd. All rights reserved.
      </div>
    </footer>
  );
}

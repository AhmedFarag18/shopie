import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 lg:px-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {[
          {
            title: "Company",
            links: ["About Us", "Contact", "Privacy Policy", "Terms of Service"],
          },
          {
            title: "Products",
            links: ["Vegetables", "Fruits", "Snacks", "Juices"],
          },
          {
            title: "Support",
            links: ["FAQs", "Shipping & Returns", "Order Status", "Help Center"],
          },
        ].map((section, idx) => (
          <div key={idx}>
            <h4 className="font-bold text-white mb-2">{section.title}</h4>
            <ul className="space-y-1">
              {section.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="font-bold text-white mb-2">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://www.facebook.com" target="_blank" className="hover:text-blue-700"><FaFacebookF /></a>
            <a href="https://www.instagram.com" target="_blank" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://www.twitter.com" target="_blank" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="https://www.linkedin.com" target="_blank" className="hover:text-blue-700"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 mt-10">
        © 2025 BlueBerry. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

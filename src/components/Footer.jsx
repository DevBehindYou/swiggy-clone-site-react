import React from "react";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t mt-10 px-2">
      <div className="max-w-[1100px] mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        
        {/* Column 1: Logo and Description */}
        <div>
          <h2 className="text-xl font-bold mb-2">Foodies App</h2>
          <p className="text-sm">
            Find top restaurants offering online delivery in your area. Compare menus, read reviews, and get your favorite meals delivered quickly and conveniently to your doorstep.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:text-black">Home</a></li>
            <li><a href="#" className="hover:text-black">Restaurants</a></li>
            <li><a href="#" className="hover:text-black">About</a></li>
            <li><a href="#" className="hover:text-black">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-md font-semibold mb-2">Contact</h3>
          <p className="text-sm">support@foodiesapp.com</p>
          <p className="text-sm mt-1">+91 98765 43210</p>

          {/* Social Icons Placeholder */}
          <div className="flex space-x-3 mt-3">
            <span className="w-7 h-7 bg-gray-300 rounded-full flex justify-center items-center cursor-pointer"><PiInstagramLogoLight /></span>
            <span className="w-7 h-7 bg-gray-300 rounded-full flex justify-center items-center cursor-pointer"><CiFacebook /></span>
            <span className="w-7 h-7 bg-gray-300 rounded-full flex justify-center items-center cursor-pointer"><CiMail /></span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} Foodies App. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

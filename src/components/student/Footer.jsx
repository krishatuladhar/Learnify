import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-green-200 w-full mt-10 px-6 md:px-36 text-left">
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
        <div className="flex md:items-start items-center w-full md:w-auto max-w-sm text-left gap-6 mt-2">
          <img src={assets.logo} alt="logo" className="h-20 flex-shrink-0" />
          <p className="text-sm text-black/80 self-center flex-shrink">
            Learnify is committed to empowering learners worldwide by providing
            high-quality courses taught by industry experts. Join us to unlock
            your potential and achieve your career goals.
          </p>
        </div>

        <div className="flex flex-col md:items-start items-center w-full md:w-auto max-w-xs text-center md:text-left">
          <h2 className="font-semibold text-black mb-5">Company</h2>
          <ul className="flex md:flex-col justify-center md:justify-start gap-6 md:gap-2 text-sm text-black/80">
            <li><a href="#" className="hover:text-black font-medium">Home</a></li>
            <li><a href="#" className="hover:text-black font-medium">About us</a></li>
            <li><a href="#" className="hover:text-black font-medium">Contact us</a></li>
            <li><a href="#" className="hover:text-black font-medium">Privacy policy</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-start w-full md:w-auto max-w-sm text-left mt-10 md:mt-0">
          <h2 className="font-semibold text-black mb-5">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-black/80 mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-2 w-full sm:w-auto">
            <input
              className="border border-gray-500/30 bg-white text-black placeholder-gray-500 outline-none w-full sm:w-64 h-9 rounded px-2 text-sm"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-black w-full sm:w-24 h-9 text-white rounded hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <p className="py-4 text-center text-xs md:text-sm text-black/60">
        Copyright 2024 © Learnify. All Rights Reserved.
      </p>
    </footer>
  );
};
 
export default Footer;

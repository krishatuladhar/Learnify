import React from "react";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">
      <h1 className="md:text-4xl text-2xl relative font-bold text-gray-800 max-w-3xl mx-auto">
        Design your destiny with courses<span className="text-blue-600"> that match your ambition.</span>
      </h1>

      <p className="md:block hidden text-gray-500 max-w-2xl mx-auto">
        We connect expert teachers, hands-on learning, and a vibrant community
        to guide you toward success.
      </p>

      <p className="md:hidden text-gray-500 max-w-sm mx-auto">
        Achieve your career goals with expert-led learning.
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;

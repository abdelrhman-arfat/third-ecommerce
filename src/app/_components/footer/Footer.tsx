import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-3 px-2 mt-10 mb-20 sm:mb-10 bg-hero-600 rounded-xl text-white flex items-center justify-center">
      <h1>Copyrights &copy; {new Date().getFullYear()}</h1>
    </div>
  );
};

export default Footer;

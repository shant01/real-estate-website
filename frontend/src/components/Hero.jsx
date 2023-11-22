import React from "react";
import backgroundImage from '../images/avi-waxman-f9qZuKoZYoY-unsplash.jpg'
import Container from "./Container";
function Hero() {
  return (
    <div
      className="relative h-screen bg-no-repeat bg-cover bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50">
        {/* Content of your hero section */}
        <div className="text-white text-center pt-24">
          <h1 className="text-5xl font-bold mb-4">Welcome to Jon Doe Realty</h1>
          <p className="text-xl mb-4">Find Your Dream Home with Us</p>
          {/* Additional content or CTA buttons */}
        </div>
      </div>
    </div>
  );
}

export default Hero; 
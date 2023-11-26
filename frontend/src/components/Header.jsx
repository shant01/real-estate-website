import React from "react";
import Container from "./Container";

function Header() {
  return (
    <header className="bg-white text-black shadow-md">
      <Container>
        <div className="flex justify-between items-center py-4">
          <span className="text-3xl font-bold">Jon Doe Realty</span>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:text-gray-600">
                  Home
                </a>
              </li>
              <li>
                <a href="/listings" className="hover:text-gray-600">
                  Listings
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-600">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;

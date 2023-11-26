import React from "react";
import Container from "./Container";
import SearchBar from "./SearchBar";
import ListingCard from "./ListingCard.jsx";

import { useState } from "react";
import listingsData from "../data/listings";

function Listings() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredListings = listingsData.filter(
    (listing) =>
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Container>
        <SearchBar onSearch={setSearchTerm} />
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {filteredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
          {/* Button for viewing all listings */}
          <div className="flex justify-center my-8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View All Listings
            </button>
          </div>
        </div>
        {/* <div className="bg-gray-300 h-0.5 w-full my-4" /> */}
      </Container>
    </div>
  );
}

export default Listings;

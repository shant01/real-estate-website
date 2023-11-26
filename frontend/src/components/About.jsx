import React from "react";
import Container from "./Container";

function About() {
  return (
    <div className="bg-white text-gray-800 p-8">
      <Container>
        <div className="container mx-auto">
          <div className="animate-slideIn">
            <h2 className="text-3xl font-semibold mb-4">
              About Jon Doe Realty
            </h2>
            <p className="text-lg">
              Jon Doe Realty has been serving the community for over 20 years,
              providing exceptional real estate services and helping clients
              find their dream homes.
            </p>
            {/* More about content */}
          </div>
        </div>
        <div className="bg-gray-300 h-0.5 w-full my-4"/>
      </Container>
    </div>
  );
}

export default About;

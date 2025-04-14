import React from "react";

import NavBar from "../components/Layouts/NavBar";
import HeroSection from "../components/Layouts/HeroSection";
function HomePage() {
  return (
    <div className="container max-w-6xl h-screen mx-auto">
      <NavBar />
      <HeroSection />
      <div className="m-2">
        <hr className="m-auto mt-20 max-w-40 md:mt-3 md:mx-0"></hr>
        <br />
        <hr className="m-auto max-w-80 md:m-0"></hr>
      </div>
    </div>
  );
}

export default HomePage;

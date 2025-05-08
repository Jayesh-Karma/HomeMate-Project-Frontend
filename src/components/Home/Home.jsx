import React from "react";
import Navbar from "../Extras/Navbar";
import HomeHeroSection from "./HomeHeroSection";
import OverlaySection from "./OverlaySection";
import AllServiceSection from "./All Services/AllServiceSection";
import PopularServices from "./PopularServices";
import OurMates from "./OurMates";
import HowItWorksSection from "./HowItWorksSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>

    <div className="w-full overflow-x-hidden flex flex-col items-center px-4 sm:px-6 lg:px-8">
      
      {/* ✅ Navbar */}
      {/* <Navbar /> */}

      {/* ✅ Hero Section */}
      <HomeHeroSection />

      {/* ✅ Overlay Section (Only visible on Medium+ screens) */}
      <div className="hidden w-full md:flex items-center justify-center relative">
        <OverlaySection outerclass="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* ✅ Services Section */}
      <section className="w-full flex justify-center pt-12 sm:mt-24" id="service">
        <AllServiceSection />
      </section>

      {/* ✅ Popular Services Section */}
      <section className="w-full flex justify-center mt-10 sm:my-16">
        <PopularServices />
      </section>

      {/* ✅ Our Mates Section */}
      <section className="w-full flex justify-center mt-10 sm:mt-16">
        <OurMates />
      </section>

      {/* ✅ How It Works Section */}
      <section className="w-full flex justify-center my-10 sm:mt-16">
        <HowItWorksSection />
      </section>

    </div>
    

    </div>
  );
};

export default Home;

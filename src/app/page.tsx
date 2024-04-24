import AboutUs from "@/components/AboutUs";
import FeaturedProperties from "@/components/FeaturedProperties";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedProperties />
      <Services />
      <AboutUs />
      <Testimonials />
    </>
  );
};

export default Home;

import { Layout } from "antd";
import React from "react";
import Hero from "./Hero";
import MediaShowcase from "components/Showcase/MediaShowcase";
import FundersShowcase from "components/Showcase/FundersShowcase";

import Overview from "./Overview";
import PartnerShowcase from "components/Showcase/PartnerShowcase";
import Testimonial from "components/Testimonial";
import ReviewWall from "./ReviewWall";
import { MIKE } from "utils/constants/Testimonials";
import HeroBackground from "assets/Backgrounds/HeroBackground";

const Home = () => {
  return (
    <div>
      <div className="absolute h-screen w-screen overflow-hidden z-0">
        <HeroBackground className="object-cover" />
      </div>

      <div className="md:mt-24">
        <Hero />
      </div>
      <MediaShowcase title="In the Press" className="mt-20 md:mt-32" />
      <ReviewWall />
      <Overview />
      <Testimonial {...MIKE} />
      <PartnerShowcase />
      <FundersShowcase />
    </div>
  );
};

export default Home;

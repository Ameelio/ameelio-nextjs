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
import { useIsMobile } from "hooks/useIsMobile";

const Home = () => {
  const isMobile = useIsMobile();

  return (
    <div>
      <div
        className="absolute h-screen w-screen overflow-hidden z-0"
        style={{
          backgroundImage: "url(/static/backgrounds/hero-background.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: isMobile ? "" : "contain",
        }}
      />
      <div className="md:my-16 xl:my-24">
        <Hero />
      </div>
      <MediaShowcase title="In the Press" />
      <ReviewWall />
      <Overview />
      <Testimonial {...MIKE} />
      <PartnerShowcase />
      <FundersShowcase />
    </div>
  );
};

export default Home;

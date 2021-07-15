import { Layout } from "antd";
import React from "react";
import Hero from "./Hero";
import MediaShowcase from "components/Showcase/MediaShowcase";
import FundersShowcase from "components/Showcase/FundersShowcase";

import Overview from "./Overview";
import HeroBackground from "assets/Backgrounds/HeroBackground";
import PartnerShowcase from "components/Showcase/PartnerShowcase";
import Testimonial from "components/Testimonial";
import ReviewWall from "./ReviewWall";
import { MIKE } from "utils/constants/Testimonials";

const Home = () => {
  return (
    <Layout.Content>
      <HeroBackground className="absolute object-cover w-screen z-0" />
      <Hero />
      <MediaShowcase />
      <ReviewWall />
      <Overview />
      <Testimonial {...MIKE} />
      <PartnerShowcase />
      <FundersShowcase />
    </Layout.Content>
  );
};

export default Home;

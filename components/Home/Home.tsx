import { Layout } from "antd";
import React from "react";
import Hero from "./Hero";
import MediaShowcase from "components/Showcase/MediaShowcase";
import FundersShowcase from "components/Showcase/FundersShowcase";

import Overview from "./Overview";
import HeroBackground from "assets/Backgrounds/HeroBackground";
import PartnerShowcase from "components/Showcase/PartnerShowcase";
import Testimonial from "components/Testimonial";
import MikeGass from "assets/Testimonials/MikeGass.png";
import ReviewWall from "./ReviewWall";
const MIKE = {
  quote: "Ameelio's video calling platform is so easy to use — it's going to save us COs an abundance of time, make our work more efficient, and get our prison population reconnected with their families at no cost.",
  author: "Mike Gass",
  occupation: 'Iowa DOC Correctional Officer',
  imageSrc: MikeGass,
}
const Home = () => {
  return (
    <Layout.Content>
      <HeroBackground className="absolute object-cover w-screen" />
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

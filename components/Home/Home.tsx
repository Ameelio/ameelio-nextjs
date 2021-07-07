import { Layout } from "antd";
import React from "react";
import Hero from "./Hero";
import MediaShowcase from "components/Showcase/MediaShowcase";
import FundersShowcase from "components/Showcase/FundersShowcase";

import Overview from "./Overview";
import HeroBackground from "assets/Backgrounds/HeroBackground";
import PartnerShowcase from "components/Showcase/PartnerShowcase";

const Home = () => {
  return (
    <Layout.Content>
      <HeroBackground className="absolute object-cover w-screen" />
      <Hero />
      <MediaShowcase />
      <Overview />
      <PartnerShowcase />
      <FundersShowcase />
    </Layout.Content>
  );
};

export default Home;

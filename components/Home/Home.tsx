import { Layout } from "antd";
import React from "react";
import Hero from "./Hero";
import MediaShowcase from "components/Showcase/MediaShowcase";
import FundersShowcase from "components/Showcase/FundersShowcase";

import Overview from "./Overview";
import HeroBackground from "assets/Backgrounds/HeroBackground";

const Home = () => {
  return (
    <Layout.Content>
      <HeroBackground className="absolute object-cover w-full" />
          <Layout className="ameelio-layout w-full">
            <Hero />
            <MediaShowcase />
            <Overview />
            <FundersShowcase />
          </Layout>
    </Layout.Content>
  );
};

export default Home;

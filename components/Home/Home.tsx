import { Layout } from "antd";
import React from "react";
import { ShowcaseItem } from "types";
import Hero from "./Hero";
import Showcase from 'components/Showcase';

interface Props {
  media: ShowcaseItem[];
  funders: ShowcaseItem[];
}

const Home = ({ media, funders }: Props) => {
  return (
    <Layout.Content>
      <Hero />
      <Showcase items={media} title="As seen in:" />
      <Showcase items={funders} title="As seen in:" />
    </Layout.Content>
  );
};



export default Home;

import { Layout } from "antd";
import ConnectHero from "components/Product/Hero/ConnectHero";
import React from "react";
import Testimonial from "components/Testimonial";
import StepByStep from 'components/Product/StepByStep';
import { JUDY } from "utils/constants/Testimonials";

interface Props {}

const ConnectProduct = (props: Props) => {
  return (
    <Layout.Content>
      <ConnectHero/>
      <Testimonial {...JUDY} />
      <StepByStep />
    </Layout.Content>
  );
};

export default ConnectProduct;

import { Layout } from "antd";
import ConnectHero from "components/Product/Hero/ConnectHero";
import React from "react";
import Testimonial from "components/Testimonial";
import Judy from "assets/Testimonials/Judy.png";
import StepByStep from 'components/Product/StepByStep';
const JUDY = {
  quote:
    "This is such an incredible service. I’ve been incarcerated for decades, family is all I have. Being able to talk to them everyday without worrying about cost is life-changing.",
  author: "Judy",
  occupation: "Iowa Correctional Institution for Women",
  imageSrc: Judy,
};

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

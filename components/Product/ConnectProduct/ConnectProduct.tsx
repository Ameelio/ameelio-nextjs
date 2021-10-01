import { Layout } from "antd";
import ConnectHero from "components/Product/Hero/ConnectHero";
import React from "react";
import Testimonial from "components/Testimonial";
import StepByStep from "components/Product/StepByStep";
import { JUDY } from "utils/constants/Testimonials";
import DenverVideoCard from "components/Cards/DenverVideoCard";
import PaddedLayout from "components/Layout/PaddedLayout";

interface Props {}

const ConnectProduct = (props: Props) => {
  return (
    <Layout.Content>
      <ConnectHero />
      <PaddedLayout>
        <DenverVideoCard />
      </PaddedLayout>
      <Testimonial {...JUDY} />
      <StepByStep />
    </Layout.Content>
  );
};

export default ConnectProduct;

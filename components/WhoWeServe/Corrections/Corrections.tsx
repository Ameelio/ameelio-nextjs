import { Layout } from "antd";
import CorrectionsHero from "./CorrectionsHero";
import React from "react";
import Testimonial from "components/Testimonial";
import StepByStep from "components/Product/StepByStep";
import { MIKE } from "utils/constants/Testimonials";
import MediaShowcase from "components/Showcase/MediaShowcase";
import FundersShowcase from "components/Showcase/FundersShowcase";
import PaddedLayout from "components/Layout/PaddedLayout";
import ProductCard from "components/Cards/ProductCard/ProductCard";
import Image from "next/image";
import LettersTracking from 'assets/Mockups/Letters/LettersTracking.png';
interface Props {}

const Corrections = (props: Props) => {
  return (
    <Layout.Content>
      <CorrectionsHero />

      <Testimonial {...MIKE} />

      <PaddedLayout className="flex flex-col gap-y-8">
        <ProductCard
          type="connect"
          desc="Support free video calls for family meetings and programming, while fully integrating your video and in-person visitation systems"
          cta={{ text: "Request a Demo", link: "" }}
          image={
            <div style={{ width: 245, height: 185}}>
              <Image
                src="/static/images/MikeUsingConnect.png"
                alt="Correctional staff using Connect"
                width="245"
                height="185"
              />
            </div>
          }
        />
         <ProductCard
          type="letters"
          desc="Guarantee tamper-proof mail by approving our contactless printing and shipping solution"
          cta={{ text: "Get in Touch", link: "" }}
          image={
            <div style={{ width: 240, height: 300}}>
              <Image
                src={LettersTracking}
                alt="Correctional staff using Connect"
              />
            </div>
          }
        />
      </PaddedLayout>
      <StepByStep />
      <div className="bg-blue-700">
        <MediaShowcase title="Ameelio in the Press" titleClassName="text-gray-500 text-xl"/>
      </div>
      <FundersShowcase />
    </Layout.Content>
  );
};

export default Corrections;

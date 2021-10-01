import { Layout } from "antd";
import LovedOnesHero from "./LovedOnesHero";
import React from "react";
import Testimonial from "components/Testimonial";
import { TARALYNN } from "utils/constants/Testimonials";
import PaddedLayout from "components/Layout/PaddedLayout";
import ProductCard from "components/Cards/ProductCard/ProductCard";
import Image from "next/image";
import ReviewWall from "components/Home/ReviewWall";
import BasicCard from "components/Cards/BasicCard";
import { H2 } from "components/Typography";
import ConnectInCall from "assets/Mockups/Connect/ConnectInCall.png";
import { LINKS } from "utils/constants";

interface Props {}

const LovedOnes = (props: Props) => {
  return (
    <Layout.Content>
      <LovedOnesHero />
      <Testimonial {...TARALYNN} />

      <PaddedLayout className="flex flex-col gap-y-8">
        <ProductCard
          type="connect"
          desc="Become a registered visitor, schedule a call, and join free video meetings with your incarcerated loved one"
          cta={{ text: "Sign the Petition", link: 'petition' }}
          image={
            <div style={{ width: 240, height: 300 }}>
              <Image
                src={ConnectInCall}
                alt="Correctional staff using Connect"
              />
            </div>
          }
        />
      </PaddedLayout>
      <ReviewWall />
      <PaddedLayout>
        <BasicCard id="how-we-free">
          <H2 className="text-center">How we&apos;re free</H2>
          <p className="text-center mt-4">
            Ameelio is a nonprofit, and 100 percent of the money we earn goes
            towards supporting free family communication. You can donate to
            other families on our Letters mobile app by purchasing Ameelio+
            Tokens. In exchange for these tokens, you can send premium Ameelio+
            items, such as informational packets, song lyrics, self-help
            resources, and more! Your donations help us provide free mail to
            hundreds of thousands of people just like you.
          </p>
        </BasicCard>
      </PaddedLayout>
    </Layout.Content>
  );
};

export default LovedOnes;

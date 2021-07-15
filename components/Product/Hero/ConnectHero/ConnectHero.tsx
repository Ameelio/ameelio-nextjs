import ProductHeroBackground from "assets/Backgrounds/ProductHeroBackground";
import ConnectWordmark from "assets/Wordmarks/ConnectWordmark";
import ConnectLogo from "assets/Logos/ConnectLogo";
import ConnectTablet from "assets/Mockups/Connect/ConnectTablet.png";
import PaddedLayout from "components/Layout/PaddedLayout";
import React from "react";
import Button from "components/Button";
import Image from "next/image";
import { Typography } from "antd";
import ConnectDash from "assets/Mockups/Connect/ConnectDash.png";
import ConnectChat from "assets/Mockups/Connect/ConnectChat.png";
import ConnectInCall from "assets/Mockups/Connect/ConnectInCall.png";
import { CONNECT_VALUE_PROPS } from "utils/constants";
import ValuePropCard from "components/Cards/ValuePropCard";

const Hero = () => {
  return (
    <div>
      <ProductHeroBackground className="absolute object-cover w-screen z-0" />
      <PaddedLayout className="z-10">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-2">
              <ConnectWordmark />
              <ConnectLogo />
            </div>
            <Typography.Title>
              The nation&apos;s first prison communication platform that&apos;s
              free for families
            </Typography.Title>
            <div className="flex">
              <Button variant="primary">Request a Demo</Button>
              <Button variant="secondary" className="ml-4">
                What to Expect
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="mb-8">
              <Image
                src={ConnectDash}
                alt="Connect tablet mockup"
                className=""
              />
            </div>
            <div className="mt-8">
              <Image src={ConnectInCall} alt="Connect tablet mockup" />
            </div>
            <div className="mb-8">
              <Image src={ConnectChat} alt="Connect tablet mockup" />
            </div>
          </div>
        </div>
        <ValuePropCard
          valueProps={CONNECT_VALUE_PROPS}
          meta={
            <Image
              src={ConnectTablet}
              alt="Connect tablet mockup"
              className="mx-auto"
            />
          }
        />
      </PaddedLayout>
    </div>
  );
};

export default Hero;

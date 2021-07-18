import ProductHeroBackground from "assets/Backgrounds/ProductHeroBackground";
import ConnectTablet from "assets/Mockups/Connect/ConnectTablet.png";
import PaddedLayout from "components/Layout/PaddedLayout";
import React from "react";
import Button from "components/Button";
import Image from "next/image";
import ConnectDOCDashFramed from "assets/Mockups/Connect/ConnectDOCDashFramed.png";
import { CORRECTIONS_VALUE_PROPS, LINKS } from "utils/constants";
import ValuePropCard from "components/Cards/ValuePropCard";
import { H1 } from "components/Typography";

const CorrectionsHero = () => {
  return (
    <div>
      <ProductHeroBackground className="absolute object-cover w-screen z-0" />
      <PaddedLayout className="z-10">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
          <div className="flex flex-col space-y-4">
            <span className="text-lg">
              Who We Serve / <span className="underline">Corrections</span>
            </span>
            <H1>
              Securely streamline your workflow with easy-to-use communication
              and management tools
            </H1>
            <div className="flex">
              <Button variant="primary" onClick={() => window.open(LINKS.CONNECT_DEMO, "_blank")}>Request a Demo</Button>
            </div>
          </div>
          <div>
            <Image
              src={ConnectDOCDashFramed}
              alt="Connect DOC dashboard"
              className="mx-auto"
            />
          </div>
        </div>
        <ValuePropCard
          valueProps={CORRECTIONS_VALUE_PROPS}
          cta={{ text: "Get In Touch", link: LINKS.GET_IN_TOUCH}}
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

export default CorrectionsHero;

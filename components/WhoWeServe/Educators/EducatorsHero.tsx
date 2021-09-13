import ProductHeroBackground from "assets/Backgrounds/ProductHeroBackground";
import ConnectTablet from "assets/Mockups/Connect/ConnectTablet.png";
import PaddedLayout from "components/Layout/PaddedLayout";
import React from "react";
import Button from "components/Button";
import Image from "next/image";
import { EDUCATORS_VALUE_PROPS, LINKS } from "utils/constants";
import ValuePropCard from "components/Cards/ValuePropCard";
import { H1 } from "components/Typography";

const EducatorsHero = () => {
  return (
    <div>
      <ProductHeroBackground className="absolute object-cover w-screen z-0" />
      <PaddedLayout className="z-10">
        <div className="grid md:grid-cols-2 grid-cols-1 space-y-4 items-center">
          <div className="flex flex-col space-y-4">
            <span className="text-lg">
              Who We Serve / <span className="underline">Educators</span>
            </span>
            <H1>
              Enhance instruction with virtual meetings and digital resources
            </H1>
            <div className="flex">
              <Button
                variant="primary"
                onClick={() => window.open(LINKS.LMS_DEMO, "_blank")}
              >
                Request a Demo
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/static/images/Mockups/LMS.png"
              alt="LMS mockup"
              width="512"
              height="284"
            />
          </div>
        </div>
        <ValuePropCard
          valueProps={EDUCATORS_VALUE_PROPS}
          cta={{ text: "Get In Touch", link: LINKS.GET_IN_TOUCH }}
        />
      </PaddedLayout>
    </div>
  );
};

export default EducatorsHero;

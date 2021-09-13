import ProductCard from "components/Cards/ProductCard/ProductCard";
import PaddedLayout from "components/Layout/PaddedLayout";
import MediaShowcase from "components/Showcase/MediaShowcase";
import PartnerShowcase from "components/Showcase/PartnerShowcase";
import Image from "next/image";
import React from "react";
import { LINKS } from "utils/constants";
import EducatorsHero from "./EducatorsHero";
import ConnectInCall from "assets/Mockups/Connect/ConnectInCall.png";

interface Props {}

const Educators = (props: Props) => {
  return (
    <div>
      <EducatorsHero />
      <MediaShowcase
        title="Ameelio in the Press"
        titleClassName="text-black opacity-50"
      />
      <PaddedLayout className="flex flex-col gap-y-8">
        <ProductCard
          type="connect"
          desc="Discover how you can leverage our communications platform to enhance instruction and provide increased access to on-campus resources."
          cta={{ text: "Get in Touch", link: LINKS.GET_IN_TOUCH }}
          image={
            <div style={{ width: 240, height: 300 }}>
              <Image
                src={ConnectInCall}
                alt="Correctional staff using Connect"
              />
            </div>
          }
        />
        <ProductCard
          type="lms"
          desc="Enhance your curriculum with an LMS built for corrections, providing students access to lessons, research resources, and assignment submission."
          cta={{ text: "Get in Touch", link: LINKS.LMS_DEMO }}
          image={
            <div className="py-8">
              <Image
                src="/static/images/Mockups/LMS.png"
                alt="Correctional staff using Connect"
                width="512"
                height="284"
              />
            </div>
          }
          disableSecondary
        />
      </PaddedLayout>
      <PartnerShowcase />
    </div>
  );
};

export default Educators;

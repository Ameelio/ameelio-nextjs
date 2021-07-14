import ProductHeroBackground from "assets/Backgrounds/ProductHeroBackground";
import ConnectWordmark from "assets/Wordmarks/ConnectWordmark";
import ConnectLogo from "assets/Products/ConnectLogo";
import ConnectTablet from "assets/Products/ConnectTablet.png";
import PaddedLayout from "components/Layout/PaddedLayout";
import React from "react";
import Button from "components/Button";
// import PersonIcon from "assets/Icons/PersonIcon";
// import DonationIcon from "assets/Icons/DonationIcon";
// import SecurityIcon from "assets/Icons/SecurityIcon";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "antd";
import BasicCard from "components/Cards/BasicCard";
import ConnectDash from "assets/Mockups/Connect/ConnectDash.png";
import ConnectChat from "assets/Mockups/Connect/ConnectChat.png";
import ConnectInCall from "assets/Mockups/Connect/ConnectInCall.png";
import {
  SafetyCertificateTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";

interface Props {
  type: "letters" | "connect";
}
const CONNECT_VALUE_PROPS = [
  {
    icon: <CheckCircleTwoTone className="text-2xl" />,
    title: "Connect is for anybody, including educators and social services.",
    body: "Connect supplements in-person instruction by connecting students with on-campus resources, such as personalized tutoring, librarian access, disability support services, financial aid, and academic counseling.",
    cta: { text: "Get in touch", link: "" },
  },
  {
    icon: <HeartTwoTone className="text-2xl" />,
    title: "Connect is completely free for families.",
    body: "You can download Connect from the app store on any Apple or Android device. Once you create your profile, you can add your loved one and request to be added as their contact. Once corrections officials approve you as a visitor, you will then be able to schedule video calls.",
    cta: { text: "Sign the petition", link: "" },
  },
  {
    icon: <SafetyCertificateTwoTone className="text-2xl" />,
    title: "Connect meets corrections industry security standards.",
    body: "Use Connect on any device, including devices that your agency may already own.",
    cta: { text: "Request a demo", link: "" },
  },
];

const Hero = ({ type }: Props) => {
  return (
    <div>
      <ProductHeroBackground className="absolute object-cover w-screen z-0" />
      <PaddedLayout className="z-100">
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
        <BasicCard className="mx-8 my-16 space-y-4 p-4 z-100">
          <div className="flex flex-col space-y-8">
            {CONNECT_VALUE_PROPS.map((value) => (
              <div className="flex space-x-4" key={value.title}>
                <div>{value.icon}</div>
                <div className="flex flex-col space-y-2">
                  <span className="font-bold">{value.title}</span>
                  <p>{value.body}</p>
                  {value.cta && (
                    <Link href={value.cta.link}>{value.cta.text}</Link>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Image src={ConnectTablet} alt="Connect tablet mockup" className="mx-auto" />
          </div>
        </BasicCard>
      </PaddedLayout>
    </div>
  );
};

export default Hero;

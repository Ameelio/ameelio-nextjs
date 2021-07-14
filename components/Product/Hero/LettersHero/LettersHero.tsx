import ProductHeroBackground from "assets/Backgrounds/ProductHeroBackground";
import LettersWordmark from "assets/Wordmarks/LettersWordmark";
import LettersLogo from "assets/Logos/LettersLogo";
import PaddedLayout from "components/Layout/PaddedLayout";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "antd";
import BasicCard from "components/Cards/BasicCard";
import LettersGiftShop from "assets/Mockups/Letters/LettersGiftShop.png";
import LettersSuccess from "assets/Mockups/Letters/LettersSuccess.png";
import LettersPacket from "assets/Mockups/Letters/LettersPacket.png";
import {
  EnvironmentTwoTone,
  MailTwoTone,
  HeartTwoTone,
  EditTwoTone,
} from "@ant-design/icons";
import { TValuePropItem } from "types";
import ValuePropsItem from "components/Product/ValuePropsItem";
import AppStoreButtonDuo from "components/Button/AppStoreButtonDuo";

const CONNECT_VALUE_PROPS: TValuePropItem[] = [
  {
    icon: <EditTwoTone className="text-4xl" />,
    title: "Write to your loved ones every week, at no cost to you.",
    body: "No more printing, stamps, or trips to the post office!",
  },
  {
    icon: <EnvironmentTwoTone className="text-4xl" />,
    title: "Easily track and receive udpates on your orders. ",
    body: "In-app mail tracking means you can stay updated every step of the way..",
  },
  {
    icon: <HeartTwoTone className="text-4xl" />,
    title: "Add a little extra, whenever you want!",
    body: "From song lyrics and photo collages, to prison recipes and short stories.",
  },
  {
    icon: <MailTwoTone className="text-4xl" />,
    title: "Your loved ones receive keepsake memories they can hold on to.",
    body: "Mail day is the best day when they get to hear from you.",
  },
];

const LettersHero = () => {
  return (
    <div>
      <ProductHeroBackground className="absolute object-cover w-screen z-0" />
      <PaddedLayout className="z-10">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-2">
              <LettersWordmark />
              <LettersLogo />
            </div>
            <Typography.Title>
              Send letters and photo cards to your incarcerated loved ones every
              week, at no cost to you
            </Typography.Title>
            <AppStoreButtonDuo />
          </div>
          <div className="grid grid-cols-3">
            <div className="mb-8">
              <Image
                src={LettersPacket}
                alt="Letters packet mockup"
                className=""
              />
            </div>
            <div className="mt-8">
              <Image src={LettersGiftShop} alt="Letters gift shop mockup" />
            </div>
            <div className="mb-8">
              <Image src={LettersSuccess} alt="Letters success page mockup" />
            </div>
          </div>
        </div>
        <BasicCard className="my-16 space-y-4 p-4 z-10">
          <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-8">
            {CONNECT_VALUE_PROPS.map((value) => (
              <ValuePropsItem key={value.title} {...value} />
            ))}
          </div>
        </BasicCard>
      </PaddedLayout>
    </div>
  );
};

export default LettersHero;

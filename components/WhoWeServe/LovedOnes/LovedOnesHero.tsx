import ProductHeroBackground from "assets/Backgrounds/ProductHeroBackground";
import PaddedLayout from "components/Layout/PaddedLayout";
import React from "react";
import Button from "components/Button";
import Image from "next/image";
import ConnectDOCDashFramed from "assets/Mockups/Connect/ConnectDOCDashFramed.png";
import { H1 } from "components/Typography";
import { METRIC_CARD_ITEMS } from "utils/constants";
import MetricCard from "components/Cards/MetricCard";
import ProductCard from "components/Cards/ProductCard/ProductCard";
import LettersGiftShop from "assets/Mockups/Letters/LettersGiftShop.png";

const LovedOnesHero = () => {
  return (
    <div className="flex">
      <ProductHeroBackground className="absolute object-cover z-0" />
      <PaddedLayout className="flex flex-col gap-y-8 z-10">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
          <div className="flex flex-col space-y-4">
            <span className="text-lg">
              Who We Serve / <span className="underline">Loved Ones</span>
            </span>
            <H1>Stay in touch with your loved ones for free</H1>
            <div className="flex">
              <Button variant="secondary">How we&apos;re free</Button>
            </div>
          </div>
          <div className="m-w-screen">
            <Image
              src={ConnectDOCDashFramed}
              alt="Connect DOC dashboard"
              className="mx-auto"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-8 z-10 gap-4">
          {METRIC_CARD_ITEMS.map((item) => (
            <MetricCard
              key={item.label}
              metric={item.metric}
              label={item.label}
              className="bg-white"
            />
          ))}
        </div>
        <ProductCard
          type="letters"
          desc="Send free personalized photos and letters every week to your incarcerated loved one, or choose something special whenever you want."
          cta={'download'}
          image={
            <div style={{ width: 240, height: 300 }}>
              <Image
                src={LettersGiftShop}
                alt="Correctional staff using Connect"
              />
            </div>
          }
        />
      </PaddedLayout>
    </div>
  );
};

export default LovedOnesHero;

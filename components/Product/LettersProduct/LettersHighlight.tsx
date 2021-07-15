import React from "react";
import LettersBackground from "assets/Backgrounds/LettersBackground";
import { METRIC_CARD_ITEMS } from "utils/constants";
import MetricCard from "components/Cards/MetricCard";
import PaddedLayout from "components/Layout/PaddedLayout";
import LettersCrazyDiagonal from "assets/Mockups/Letters/LettersCrazyDiagonal.png";
import Image from "next/image";
interface Props {}

const LettersHighlight = (props: Props) => {
  return (
    <div className="flex items-center">
      <LettersBackground className="absolute object-cover w-6/12 right-0 z-0" />
      <PaddedLayout className="grid grid-cols-1 md:grid-cols-2  items-center	" >
        <div className="grid grid-cols-2 gap-4 auto-rows-min" >
          {METRIC_CARD_ITEMS.map((item) => (
            <MetricCard
              key={item.label}
              metric={item.metric}
              label={item.label}
              className="bg-white"
            />
          ))}
        </div>
        <div className="ml-auto md:w-2/3">
          <Image
            src={LettersCrazyDiagonal}
            layout="responsive"
            alt="3D App Mockup"
          />
        </div>
      </PaddedLayout>
    </div>
  );
};

export default LettersHighlight;

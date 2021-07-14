import React from "react";
import LettersBackground from "assets/Backgrounds/LettersBackground";
import { METRIC_CARD_ITEMS } from "utils/constants";
import MetricCard from "components/Cards/MetricCard";
import PaddedLayout from "components/Layout/PaddedLayout";

interface Props {}

const LettersHighlight = (props: Props) => {
  return (
    <div className="flex items-center">
      <LettersBackground className="absolute object-cover w-6/12 right-0 z-0" />
      <PaddedLayout className="grid grid-cols-1 md:grid-cols-2">
        <div className="grid grid-cols-2 mt-8 gap-4">
          {METRIC_CARD_ITEMS.map((item) => (
            <MetricCard
              key={item.label}
              metric={item.metric}
              label={item.label}
              className="bg-white"
            />
          ))}
        </div>
        <span>hi</span>
      </PaddedLayout>
    </div>
  );
};

export default LettersHighlight;

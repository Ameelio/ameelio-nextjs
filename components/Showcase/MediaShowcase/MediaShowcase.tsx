import React from "react";

// Media
import Bloomberg from "assets/Media/Bloomberg";
import Forbes from "assets/Media/Forbes";
import TechCrunch from "assets/Media/Techcrunch";
import BusinessInsider from "assets/Media/BusinessInsider";
import Wapo from "assets/Media/Wapo";
import FastCompany from "assets/Media/FastCompany";
import { ShowcaseItem } from "types";
import Showcase from "../Showcase";
import PaddedLayout from "components/Layout/PaddedLayout";

const MEDIA: ShowcaseItem[] = [
  {
    asset: <Bloomberg />,
    link: "https://www.forbes.com/sites/angelauyeung/2020/09/21/the-prison-communications-nonprofit-backed-by-twitters-jack-dorsey-and-former-google-chief-eric-schmidt/#139203bc3b92",
    label: "Bloomberg",
  },
  {
    asset: <Forbes />,
    link: "https://www.forbes.com/sites/angelauyeung/2020/09/21/the-prison-communications-nonprofit-backed-by-twitters-jack-dorsey-and-former-google-chief-eric-schmidt/#139203bc3b92",
    label: "Forbes",
  },
  {
    asset: <Wapo />,
    link: "https://www.washingtonpost.com/opinions/2020/03/20/coronavirus-is-upending-society-here-are-ideas-mitigate-its-impact/?arc404=true#Orchingwa-Saruhashi-Schull",
    label: "Washington Post",
  },
  {
    asset: <TechCrunch />,
    link: "https://techcrunch.com/2020/05/14/ameelio-wants-to-take-on-for-profit-prison-calling-rackets-after-starting-with-free-letters-to-inmates/",
    label: "TechCrunch",
  },
  {
    asset: <BusinessInsider />,
    link: "https://www.businessinsider.com/startup-ameelio-communicate-loved-ones-incarcerated-yale-2020-6",
    label: "Business Insider",
  },
  {
    asset: <FastCompany />,
    link: "https://www.fastcompany.com/90608032/this-app-is-making-it-free-for-incarcerated-people-to-make-video-calls",
    label: "Fast Company",
  },
];

const MediaShowcase = () => {
  return (
    <PaddedLayout>
      <Showcase items={MEDIA} title="As seen in..." />;
    </PaddedLayout>
  );
};

export default MediaShowcase;

import React from "react";
import LettersHero from "components/Product/Hero/LettersHero";
import PaddedLayout from "components/Layout/PaddedLayout";
import BasicCard from "components/Cards/BasicCard";
import { Typography } from "antd";
import LettersHighlight from "./LettersHighlight";
import Testimonial from "components/Testimonial";
import TestimonialList from "components/Home/TestimonialList";
const REVIEWER = {
  quote: "This is the most amazing app I have ever used. I am blessed to have a service like this when I can't afford to mail my son a letter plus they send pics with ur letter. Thank u Ameelio.",
  author: "Terri McGillivray",
  occupation: 'Google Play Reviewer',
  imageSrc: "https://play-lh.googleusercontent.com/a-/AOh14GjlDWltnohiSWtilyf_otxyp1bySeTnG0edBs0XLOE=w96-h96-n-rw",
}

interface Props {}

const LettersProduct = (props: Props) => {
  return (
    <div>
      <LettersHero />
      {/* <Testimonial {...REVIEWER}/> */}
      <TestimonialList />
      <LettersHighlight />
      <PaddedLayout>
        <BasicCard>
          <Typography.Title className="text-center">
            How we&apos;re free
          </Typography.Title>
          <p className="text-center mt-4">
            You can find the Ameelio: Photo Cards to Prison app on the app store
            of any Apple or Android device. On our app, you can send two free
            letters or postcards per week to anybody in jail, prison, or ICE
            detention in the United States.
          </p>
          <p className="text-center mt-4">
            You can also send specialty items, such as recipes, games, puzzles,
            writing prompts, and short stories. In order to send specialty
            items, we ask that you donate on the app in in exchange for Ameelio+
            Tokens. Ameelio is a nonprofit and these donations help us provide
            free mail.{" "}
          </p>
        </BasicCard>
      </PaddedLayout>
    </div>
  );
};

export default LettersProduct;

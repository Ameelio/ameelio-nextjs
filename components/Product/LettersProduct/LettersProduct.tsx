import React from "react";
import LettersHero from "components/Product/Hero/LettersHero";
import PaddedLayout from "components/Layout/PaddedLayout";
import BasicCard from "components/Cards/BasicCard";
import LettersHighlight from "./LettersHighlight";
import ReviewWall from "components/Home/ReviewWall";
import { H2 } from "components/Typography";

interface Props {}

const LettersProduct = (props: Props) => {
  return (
    <div>
      <LettersHero />
      <ReviewWall />
      <LettersHighlight />
      <PaddedLayout>
        <BasicCard>
          <H2 className="text-center">
            How we&apos;re free
          </H2>
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

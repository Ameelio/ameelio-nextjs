import React from "react";
import BasicCard from "./BasicCard";
import { H3 } from "components/Typography";
import ResponsivePlayer from "components/ResponsivePlayer";

interface Props {}

const DenverVideoCard = (props: Props) => {
  return (
    <BasicCard>
      <div className="grid gap-y-4 md:grid-cols-2 md:gap-x-16 items-center md:p-4">
        <div className="flex flex-col gap-y-4">
          <span className="text-gray-500 text-center md:text-left">VIDEO</span>
          <H3 className="text-center md:text-left">Family contact and strong community bonds are vital.</H3>
          <span className="text-center md:text-left">
            Dean Williams (Colorado DOC, Executive Director), Amber Pedersen
            (Colorado DOC, Policy Advisor), Wanda Bertram (Prison Policy
            Initiative), and Zo speak about why it&apos;s critical to lower
            barriers to family contact and how Ameelio&apos;s Connect platform
            helps DOCs further their rehabilitative mission.
          </span>
        </div>
        <ResponsivePlayer url="https://www.youtube.com/watch?v=sZXnvjkfbqo&ab_channel=Ameelio" />
      </div>
    </BasicCard>
  );
};

export default DenverVideoCard;

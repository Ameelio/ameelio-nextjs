import React from "react";
import { H1, H2 } from "components/Typography";
import ProductHeroBackground from "assets/Backgrounds/ProductHeroBackground";
import PartnerShowcase from "components/Showcase/PartnerShowcase";
import FundersShowcase from "components/Showcase/FundersShowcase";
import BasicCard from "components/Cards/BasicCard";
import {
  FOUNDERS,
  JUSTICE_BOARD,
  TEAMMATES,
  TECH_BOARD,
} from "utils/constants/Team";
import TeamMemberItem from "./TeamMemberItem";
import PaddedLayout from "components/Layout/PaddedLayout";

interface Props {}

const Team = (props: Props) => {
  return (
    <div>
      <ProductHeroBackground className="absolute object-cover z-0" />
      <PaddedLayout className="flex flex-col gap-y-4">
        <H1 className="text-center">Meet the team</H1>
        <p className="text-center">
          We&apos;re a passionate group made up of everyone from data scientists
          to designers, engineers to enigmatologists, and criminologists to
          researchers. We believe that everyone impacted by incarceration should
          be able to stay in touch with their loved ones for free.{" "}
        </p>
        <p className="text-center">
          We are working as hard as we can to make that a reality.
        </p>
      </PaddedLayout>
      <PaddedLayout>
        <BasicCard>
          <div className="flex flex-col gap-y-8 items-center">
            <div className="flex items-center">
              {FOUNDERS.map((member) => (
                <TeamMemberItem key={member.name} {...member} />
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5">
              {TEAMMATES.map((member) => (
                <TeamMemberItem key={member.name} {...member} />
              ))}
            </div>
            <H1 className="text-center">Board of Advisors</H1>
            <H2 className="text-center">Criminal Justice Advisors</H2>
            <div className="grid grid-cols-2 md:grid-cols-5">
              {JUSTICE_BOARD.map((member) => (
                <TeamMemberItem key={member.name} {...member} />
              ))}
            </div>
            <H2 className="text-center">Tech Advisors</H2>
            <div className="grid grid-cols-2 md:grid-cols-5">
              {TECH_BOARD.map((member) => (
                <TeamMemberItem key={member.name} {...member} />
              ))}
            </div>
          </div>
        </BasicCard>
        <PartnerShowcase />
        <FundersShowcase />
      </PaddedLayout>
    </div>
  );
};

export default Team;

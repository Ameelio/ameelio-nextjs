import React from "react";
import BasicCard from "components/Cards/BasicCard";
import Button from "components/Button";
import { TStepByStepItem } from "types";
import StepByStepItem from "./StepByStepItem";
import { Typography } from "antd";
import PaddedLayout from "components/Layout/PaddedLayout";
import {  H3 } from "components/Typography";
import { LINKS } from "utils/constants";

interface Props {}

const STEPS: TStepByStepItem[] = [
  {
    index: 1,
    title: "Book",
    desc: "Book a time for a Connect demo and intro meeting by completing our demo request form.",
  },
  {
    index: 2,
    title: "Meet",
    desc: "Meet with our integration specialists to understand how we can improve your agency’s visitation system.",
  },
  {
    index: 3,
    title: "Consult",
    desc: "Consult with legal to understand how we can provide services under your agency’s existing contracts.",
  },
  {
    index: 4,
    title: "Sign",
    desc: "Sign a contract, finalizing the requested devices and final integrations for your agency.",
  },
  {
    index: 5,
    title: "Launch",
    desc: "Provide free video calls and improve efficiency with our paperless process.",
  },
];

const StepByStep = (props: Props) => {
  return (
    <PaddedLayout>
      <BasicCard>
        <div className="flex flex-col items-center gap-y-4" id="what-to-expect">
          <H3 className="text-center">What to expect when you request a demo</H3>
          <p className="text-center">
            If you’re a DOC or jail interested in getting Connect to your state,
            here’s what to expect when you request a demo.
          </p>
          <Button variant="primary" onClick={() => window.open(LINKS.CONNECT_DEMO, "_blank")}>
            Request a Demo
          </Button>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:mt-16 mt-8 md:mx-16">
          {STEPS.map((step) => (
            <StepByStepItem key={step.index} {...step} />
          ))}
        </div>
      </BasicCard>
    </PaddedLayout>
  );
};

export default StepByStep;

import PaddedLayout from "components/Layout/PaddedLayout";
import React from "react";
import { TShowcaseItem } from "types";
import FWDLogo from "assets/Partners/FWD";
import UChicagoLogo from "assets/Partners/UChicago";
import EricHolderLogo from "assets/Partners/EricHolder";
import TMPLogo from "assets/Partners/TMP";
import Showcase from "../Showcase";

interface Props {}

const PARTNERS: TShowcaseItem[] = [
  { label: "UChicago", asset: <UChicagoLogo /> },
  { label: "TMP", asset: <TMPLogo /> },
  { label: "Eric Holder", asset: <EricHolderLogo /> },
  { label: "FWD.us", asset: <FWDLogo /> },
];

const PartnerShowcase = (props: Props) => {
  return (
    <PaddedLayout>
      <Showcase items={PARTNERS} title="Partners" />
    </PaddedLayout>
  );
};

export default PartnerShowcase;

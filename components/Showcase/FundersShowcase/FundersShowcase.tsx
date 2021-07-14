import React from "react";

import ShuttleworthLogo from "assets/Funders/Shuttleworth";
import MozillaLogo from "assets/Funders/Mozilla";
import RobinhoodLogo from "assets/Funders/RobinHood";
import SchmidtFutureLogo from "assets/Funders/SchmidtFutures";
import GoogleLogo from "assets/Funders/Google";
import NYCTLogo from "assets/Funders/NYCT";
import ABELogo from "assets/Funders/ABE";
import TrueVenturesLogo from "assets/Funders/TrueVentures";
import ZendeskLogo from "assets/Funders/Zendesk";
import { TShowcaseItem } from "types";
import Showcase from "../Showcase";
import PaddedLayout from "components/Layout/PaddedLayout";

const FUNDERS: TShowcaseItem[] = [
  { label: "Jack Dorsey" },
  { label: "Vinod Khosla" },
  { label: "Kevin P. Ryan" },
  { label: "Cindy & Devin Wenig" },
  { label: "True Ventures", asset: <TrueVenturesLogo /> },
  { label: "Schmidt Futures", asset: <SchmidtFutureLogo /> },
  { label: "Robinhood Foundation", asset: <RobinhoodLogo /> },
  { label: "Mozilla Foundation", asset: <MozillaLogo /> },
  { label: "Shuttleworth", asset: <ShuttleworthLogo /> },
  { label: "The New York Community Trust", asset: <NYCTLogo /> },
  { label: "Google.org", asset: <GoogleLogo /> },
  { label: "American Bar Endowment", asset: <ABELogo /> },
  { label: "Zendesk", asset: <ZendeskLogo /> },
  { label: "Jack Smith" },
  { label: "Paige Henchen" },
];

const FundersShowcase = () => (
  <PaddedLayout>
    <Showcase items={FUNDERS} title="Funders" />;
  </PaddedLayout>
);

export default FundersShowcase;

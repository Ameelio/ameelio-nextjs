import React from "react";
import LogoWhite from "assets/Logos/LogoWhite";
import PaddedLayout from "components/Layout/PaddedLayout";
import SocialMedia from "./SocialMedia";
import CompanyFooter from './CompanyFooter';
import Policies from "./Policies";

const Footer = () => {
  return (
    <div className="bg-blue-700 z-50">
      <PaddedLayout className="flex flex-col md:flex-row gap-y-8 gap-x-24 ">
        <SocialMedia />
        <CompanyFooter/>
        <Policies />
        <div className="ml-auto flex flex-col md:items-end gap-y-2">
          <LogoWhite />
          <span className="mt-auto text-white opacity-50 md:text-right">
            Copyright © 2021 Ameelio Inc. All Rights Reserved
          </span>
          <span className="text-white opacity-50 md:text-right">
            Ameelio Inc, EIN 84-1800611, is a registered nonprofit 501(c)(3)
            organization.
          </span>
        </div>
      </PaddedLayout>
    </div>
  );
};

export default Footer;

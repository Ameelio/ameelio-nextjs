import Link from "components/Link";
import React from "react";
import { LINKS } from "utils/constants";

interface Props {}

const CompanyFooter = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-2">
      <span className="font-light text-white mb-3 ">Company</span>
      <Link text="Our team" href="/our-story/team" className="text-white opacity-50"/>
      <Link text="We're hiring" href={LINKS.HIRING} className="text-white opacity-50"/>
      <Link text="Get in touch" href={LINKS.GET_IN_TOUCH} className="text-white opacity-50"/>
    </div>
  );
};

export default CompanyFooter;

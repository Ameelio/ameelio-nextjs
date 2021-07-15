import React from "react";
import NextLink from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";

interface Props {
  href: string;
  text: string;
}

const Link = ({ href, text}: Props) => {
  return (
    <NextLink passHref href={href}>
      <a className="font-medium">
        {text} <ArrowRightOutlined />
      </a>
    </NextLink>
  );
};

export default Link;

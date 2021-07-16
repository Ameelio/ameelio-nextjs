import React from "react";
import NextLink from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";

interface Props {
  href: string;
  text: string;
  className?: string;
  external?: boolean;
}

const Link = ({ href, text, className, external }: Props) => {
  return (
    <NextLink passHref href={href}>
      <a className={className || "font-medium"}>
        {text} {external && <ArrowRightOutlined />}
      </a>
    </NextLink>
  );
};

export default Link;

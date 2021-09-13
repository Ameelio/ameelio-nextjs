import React from "react";
import { Layout, LayoutProps } from "antd";

type LayoutPercentage = `${number}%`;
interface Props extends LayoutProps {
  children?: React.ReactNode |  React.ReactNode[];
  className?: string;
  marginLeft?: LayoutPercentage;
  marginRight?: LayoutPercentage
}

const PaddedLayout = ({children, className, marginLeft, marginRight}: Props) => {
  return (
    <div
      className={`my-4 md:my-0 xl:my-3 py-8 md:py-2 xl:py-8 ${className}`}
      style={{
        marginLeft:  marginLeft || "14%",
        marginRight: marginRight || "14%",
      }}
    >
      {children}
    </div>
  );
};

export default PaddedLayout;

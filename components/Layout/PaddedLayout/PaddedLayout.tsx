import React from "react";
import { Layout, LayoutProps } from "antd";

interface Props extends LayoutProps {
  disableVerticalSpacing?: boolean;
  children?: React.ReactNode |  React.ReactNode[];
  className?: string;
}

const PaddedLayout = ({disableVerticalSpacing, children, className}: Props) => {
  return (
    <div
      className={`${disableVerticalSpacing ? '' : 'my-4 md:my-0 xl:my-3 py-8 md:py-2 xl:py-8'} ${className}`}
      style={{
        marginLeft: "14%",
        marginRight: "14%",
      }}
    >
      {children}
    </div>
  );
};

export default PaddedLayout;

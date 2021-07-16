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
      className={`${disableVerticalSpacing ? '' : 'my-4 py-8'} ${className}`}
      style={{
        marginLeft: "14%",
        marginRight: "14%",
        // marginTop: disableVerticalSpacing ? undefined : 80,
      }}
    >
      {children}
    </div>
  );
};

export default PaddedLayout;

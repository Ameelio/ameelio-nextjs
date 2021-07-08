import React from "react";
import { Layout, LayoutProps } from "antd";

interface Props extends LayoutProps {
  disableVerticalSpacing?: boolean;
}

const PaddedLayout = ({disableVerticalSpacing, ...props}: Props) => {
  return (
    <Layout
      {...props}
      className={`${props.className}`}
      style={{
        marginLeft: "14%",
        marginRight: "14%",
        marginTop: disableVerticalSpacing ? undefined : 80,
      }}
    >
      {props.children}
    </Layout>
  );
};

export default PaddedLayout;

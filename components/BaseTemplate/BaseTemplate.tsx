import React, { ReactNode } from "react";
import { Menu, Layout } from "antd";
import Footer from "components/Footer";

interface Props {
    children: ReactNode | ReactNode[];
}

const BaseTemplate = ({children}: Props) => {
  return (
    <Layout>
      <Layout.Header className="bg-white">
        <Menu mode="horizontal">
          <Menu.SubMenu title="Platform">
            <Menu.Item>Connect</Menu.Item>
            <Menu.Item>Letters</Menu.Item>
          </Menu.SubMenu>

          <Menu.Item>Who We Serve</Menu.Item>
          <Menu.Item>Our Story</Menu.Item>
        </Menu>
      </Layout.Header>
      {children}
      <Layout.Footer className="bg-blue-700">
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default BaseTemplate;

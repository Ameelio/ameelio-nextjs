import React, { ReactNode } from "react";
import { Menu, Layout } from "antd";
import Footer from "components/Footer";
import Link from "next/link";

interface Props {
  children: ReactNode | ReactNode[];
}

const BaseTemplate = ({ children }: Props) => {
  return (
    <Layout>
      <Layout.Header className="bg-white">
        <Menu mode="horizontal">
          <Menu.SubMenu title="Platform" key="products">
            <Menu.Item key="products-connect">
              <Link href="/products/connect">Connect</Link>
            </Menu.Item>
            <Menu.Item key="products-letters">
              <Link href="/products/letters">Letters</Link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.Item key="who-serve">Who We Serve</Menu.Item>
          <Menu.Item key="our-story">Our Story</Menu.Item>
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

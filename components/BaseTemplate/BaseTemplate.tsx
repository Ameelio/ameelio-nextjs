import React, { ReactNode } from "react";
import { Menu, Layout } from "antd";
import Footer from "components/Footer";
import Link from "next/link";
import Logo from "assets/Logos/Logo";
import Button from "components/Button";
interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
}

const BaseTemplate = ({ children, className }: Props) => {
  return (
    <Layout className={className}>
      {/* <div></div> */}
      <Layout.Header className="bg-white flex items-center justify-between">
        <Link href="/" passHref={true}>
          <a><Logo /></a>
        </Link>
        {/* <Menu mode="horizontal">
          <Menu.SubMenu title="Platform" key="products">
            <Menu.Item key="products-connect">
              <Link href="/products/connect">Connect</Link>
            </Menu.Item>
            <Menu.Item key="products-letters">
              <Link href="/products/letters">Letters</Link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.Item key="who-serve">Who We Serve</Menu.Item>
          <Menu.SubMenu title="Our Story" key="our-story">
            <Menu.Item key="our-story-problem">
              <Link href="/our-story/problem">The Problem</Link>
            </Menu.Item>
            <Menu.Item key="our-story-team">
              <Link href="/our-story/team">Team</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu> */}
      </Layout.Header>
      {children}
        <Footer />
    </Layout>
  );
};

export default BaseTemplate;

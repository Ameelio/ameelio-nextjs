import React, { ReactNode } from "react";
import { Layout } from "antd";
import Footer from "components/Footer";
import Link from "next/link";
import Logo from "assets/Logos/Logo";
import Button from "components/Button";
import Menu from './Menu';
interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
}

const BaseTemplate = ({ children, className }: Props) => {
  return (
    <Layout className={`max-w-screen overflow-hidden${className}`}>
      {/* <div></div> */}
      <Layout.Header className="bg-white flex items-center justify-between">
        <Link href="/" passHref={true}>
          <a><Logo /></a>
        </Link>
        <Menu />
      </Layout.Header>
      {children}
        <Footer />
    </Layout>
  );
};

export default BaseTemplate;

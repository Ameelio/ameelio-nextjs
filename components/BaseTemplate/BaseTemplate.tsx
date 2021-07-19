import React, { ReactNode, useEffect } from "react";
import { Layout } from "antd";
import Footer from "components/Footer";
import Link from "next/link";
import Logo from "assets/Logos/Logo";
import Button from "components/Button";
import Menu from "./Menu";
import Head from "next/head";
import { hotjar } from "react-hotjar";

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
}

const BaseTemplate = ({ children, className }: Props) => {
  useEffect(() => {
    const hjid = process.env.NEXT_PUBLIC_HJID;
    const hjsv = process.env.NEXT_PUBLIC_HJSV;
    if (!hjid || !hjsv) return;
    hotjar.initialize(parseInt(hjid), parseInt(hjsv));
  }, []);

  return (
    <Layout className={`max-w-screen overflow-hidden ${className}`}>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="image" content="/static/images/HeroMockup.png" />
        <meta property="og:image" content="/static/images/HeroMockup.png" />
        <meta
          property="og:title"
          content="Ameelio: Transforming America’s correctional system with technology"
        />
        <meta
          property="og:description"
          content="Transforming America’s correctional system with technology"
        />
        <meta property="og:site_name" content="Ameelio" />
        <meta property="og:url" content="https://ameelio.org/" />
        <meta property="fb:app_id" content="2976582489057522" />
        <meta name="twitter:image" content="/static/images/HeroMockup.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@teamameelio" />
      </Head>
      <div
        className="px-12 bg-white flex items-center justify-between"
        style={{ height: "64px", lineHeight: "64px" }}
      >
        <Link href="/" passHref={true}>
          <a>
            <Logo />
          </a>
        </Link>
        <Menu />
      </div>
      {children}
      <Footer />
    </Layout>
  );
};

export default BaseTemplate;

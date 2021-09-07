import React, { useState } from "react";
import { Menu as AntdMenu, Drawer } from "antd";
import NextLink from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import LettersWordmark from "assets/Wordmarks/LettersWordmark";
import ConnectWordmark from "assets/Wordmarks/ConnectWordmark";
import LettersLogo from "assets/Logos/LettersLogo";
import ConnectLogo from "assets/Logos/ConnectLogo";
import Link from "components/Link";
import { LINKS } from "utils/constants";
import { useIsMobile } from "hooks/useIsMobile";

const ProductMenuItem = ({ type }: { type: "letters" | "connect" }) => (
  <NextLink
    passHref
    href={type === "letters" ? "/products/letters" : "/products/connect"}
  >
    <div className="flex space-x-4 items-center">
      {/* <div>{type === "letters" ? <LettersLogo /> : <ConnectLogo />}</div> */}

      <div className="flex flex-col">
        {type === "letters" ? (
          <div className="flex items-center space-x-2 w-5/12">
            <LettersWordmark /> <LettersLogo />
          </div>
        ) : (
          <div className="flex  items-center space-x-2 w-1/2">
            <ConnectWordmark /> <ConnectLogo />
          </div>
        )}
        <span className="text-gray-600">
          {type === "letters"
            ? "Free letters & photo cards to prison"
            : "Free & secure video calls with incarcerated people"}
        </span>
      </div>
    </div>
  </NextLink>
);

interface Props {}
const Menu = (props: Props) => {
  const [showMobileModal, setShowMobileModal] = useState(false);

  const isMobile = useIsMobile();
  return isMobile ? (
    <span>
      <MenuOutlined
        className="text-2xl"
        onClick={() => setShowMobileModal(true)}
      />
      <Drawer
        visible={showMobileModal}
        onClose={() => setShowMobileModal(false)}
      >
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-2">
            <span className="text-gray-600">PRODUCTS</span>
            <ProductMenuItem type="connect" />
            <ProductMenuItem type="letters" />
          </div>

          <div className="flex flex-col gap-y-2">
            <span className="text-gray-600">WHO WE SERVE</span>
            <Link text="Loved Ones" href="/who-we-serve/loved-ones" />
            <Link text="Corrections" href="/who-we-serve/corrections" />
          </div>

          <div className="flex flex-col gap-y-2">
            <span className="text-gray-600">OUR STORY</span>
            <Link text="Understanding The Problem" href="/our-story/problem" />
            <Link text="Meet The Team" href="/our-story/team" />
            <Link text="Get In Touch" href={LINKS.GET_IN_TOUCH} external />
            <Link text="We're Hiring" href={LINKS.HIRING} external />
          </div>
        </div>
      </Drawer>
    </span>
  ) : (
    <AntdMenu mode="horizontal">
      <AntdMenu.SubMenu title="Platform" key="products">
        <AntdMenu.Item key="products-connect">
          <NextLink href="/products/connect">Connect</NextLink>
        </AntdMenu.Item>
        <AntdMenu.Item key="products-letters">
          <NextLink href="/products/letters">Letters</NextLink>
        </AntdMenu.Item>
      </AntdMenu.SubMenu>

      <AntdMenu.SubMenu title="Who We Serve" key="who-serve">
        <AntdMenu.Item key="who-we-serve-loved-ones">
          <NextLink href="/who-we-serve/loved-ones">Loved Ones</NextLink>
        </AntdMenu.Item>
        <AntdMenu.Item key="who-we-serve-corrections">
          <NextLink href="/who-we-serve/corrections">Corrections</NextLink>
        </AntdMenu.Item>
        <AntdMenu.Item key="who-we-serve-educators">
          <NextLink href="/who-we-serve/educators">Educators</NextLink>
        </AntdMenu.Item>
      </AntdMenu.SubMenu>
      <AntdMenu.SubMenu title="Our Story" key="our-story">
        <AntdMenu.Item key="our-story-problem">
          <NextLink href="/our-story/problem">The Problem</NextLink>
        </AntdMenu.Item>
        <AntdMenu.Item key="our-story-team">
          <NextLink href="/our-story/team">Team</NextLink>
        </AntdMenu.Item>
        <AntdMenu.Item key="our-story-get-in-touch">
          <Link text="Get In Touch" href={LINKS.GET_IN_TOUCH} external />
        </AntdMenu.Item>
        <AntdMenu.Item key="our-story-hiring">
          <Link text="We're Hiring" href={LINKS.HIRING} external />
        </AntdMenu.Item>
      </AntdMenu.SubMenu>
    </AntdMenu>
  );
};

export default Menu;

import React, { useState } from "react";
import { Row, Col, Typography, Carousel } from "antd";
import BasicCard from "components/Cards/BasicCard";
import EducatorsMockup from "assets/Mockups/Educators.png";
import LovedOnesMockup from "assets/Mockups/LovedOnes.png";
import CorrectionsMockups from "assets/Mockups/DOC.png";
import Image from "next/image";

interface Props {}

type TTab = "what" | "why";

const tabList: { key: TTab; tab: string }[] = [
  {
    key: "what",
    tab: "What we do",
  },
  {
    key: "why",
    tab: "Why we do it",
  },
];

const contentList: Record<TTab, string> = {
  what: "We build free-to-use communications and education technology to create a more humane and rehabilitative corrections system.",
  why: "95% of incarcerated people return to society. It is imperative that we connect our future neighbors to vital resources beforehand, empowering them to chart their own paths toward successful entry from day one. ",
};

const Overview = (props: Props) => {
  const [tab, setTab] = useState<TTab>("what");

  return (
    <div>
      <Row gutter={24}>
        <Col sm={24} md={12}>
          <BasicCard
            tabList={tabList}
            onTabChange={(key) => setTab(key as TTab)}
            className="h-72"
          >
            <Typography.Text className="text-xl">
              {contentList[tab]}
            </Typography.Text>
          </BasicCard>
        </Col>
        <Col sm={24} md={8}>
          <Carousel>
            {/* <div style={{ width: 344, height: 275, position: "relative" }}> */}
            <Image
              src={LovedOnesMockup}
              alt="Mockup with loved ones products"
              // layout="fill"
              // objectFit="contain"
            />
            {/* </div> */}
            <Image
              src={EducatorsMockup}
              alt="Mockup with loved ones products"
            />
            <Image
              src={CorrectionsMockups}
              alt="Mockup with loved ones products"
            />
          </Carousel>
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
};

export default Overview;

import React, { useState } from "react";
import { Row, Col, Typography, Carousel } from "antd";
import BasicCard from "components/Cards/BasicCard";
import EducatorsMockup from "assets/Mockups/Educators.png";
import LovedOnesMockup from "assets/Mockups/LovedOnes.png";
import CorrectionsMockups from "assets/Mockups/DOC.png";
import Image from "next/image";
import MetricCard from "components/Cards/MetricCard";
import PaddedLayout from "components/Layout/PaddedLayout";
import OverviewBackground from "assets/Backgrounds/OverviewBackground";
import { METRIC_CARD_ITEMS } from "utils/constants";

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

const CONTENT_LIST: Record<TTab, string> = {
  what: "We build free-to-use communications and education technology to create a more humane and rehabilitative corrections system.",
  why: "95% of incarcerated people return to society. It is imperative that we connect our future neighbors to vital resources beforehand, empowering them to chart their own paths toward successful entry from day one. ",
};

const Overview = (props: Props) => {
  const [tab, setTab] = useState<TTab>("what");

  return (
    <div>
      <OverviewBackground className="absolute right-0 w-7/12" />

      <PaddedLayout disableVerticalSpacing>
        <Row gutter={24} className="mt-16">
          <Col sm={24} md={14}>
            <BasicCard
              tabList={tabList}
              onTabChange={(key) => setTab(key as TTab)}
              className="h-72"
            >
              <Typography.Text className="text-xl">
                {CONTENT_LIST[tab]}
              </Typography.Text>
            </BasicCard>
          </Col>
          <Col sm={24} md={8}>
            <Carousel>
              <Image
                src={LovedOnesMockup}
                alt="Mockup with loved ones products"
                width="344"
                height="275"
                layout="responsive"
              />
              <Image
                src={EducatorsMockup}
                alt="Mockup with loved ones products"
                width="244"
                height="145"
                layout="responsive"
              />
              <Image
                src={CorrectionsMockups}
                alt="Mockup with loved ones products"
                width="242"
                height="145"
                layout="responsive"
              />
            </Carousel>
          </Col>
        </Row>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-8">
          {METRIC_CARD_ITEMS.map((item) => (
            <MetricCard
              key={item.label}
              metric={item.metric}
              label={item.label}
            />
          ))}
        </div>
      </PaddedLayout>
    </div>
  );
};

export default Overview;

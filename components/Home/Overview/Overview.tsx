import React, { useState } from "react";
import { Typography, Carousel } from "antd";
import BasicCard from "components/Cards/BasicCard";
import LMSMockup from "assets/Mockups/LMS.png";
import ConnectDOCDashboard from "assets/Mockups/Connect/ConnectDOCDashboard.png";
import ConnectInCall from "assets/Mockups/Connect/ConnectInCall.png";
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
      {/* <OverviewBackground className="absolute right-0 w-6/12 z-0" /> */}

      <PaddedLayout>
        <div className="grid md:grid-cols-2 gap-x-16">
          {/* <Col sm={24} md={14}> */}
          <BasicCard
            tabList={tabList}
            onTabChange={(key) => setTab(key as TTab)}
            // className="h-72"
          >
            <Typography.Text className="text-xl">
              {CONTENT_LIST[tab]}
            </Typography.Text>
          </BasicCard>
          {/* </Col> */}
          {/* <Col sm={24} md={8}> */}
          <div>
            <OverviewBackground className="absolute right-0 w-6/12 z-0" />

            {/* <Carousel className="row-span-1">
              <Image
                src={LMSMockup}
                alt="Mockup with loved ones products"
                width="244"
                height="145"
                layout="responsive"
              />
              <Image
                src={ConnectDOCDashboard}
                alt="Mockup with loved ones products"
                // width="242"
                // height="145"
                // layout="responsive"
              />
            </Carousel> */}
          </div>
          {/* </Col> */}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-8">
          {METRIC_CARD_ITEMS.map((item) => (
            <MetricCard
              key={item.label}
              metric={item.metric}
              label={item.label}
              className="z-10"
            />
          ))}
        </div>
      </PaddedLayout>
    </div>
  );
};

export default Overview;

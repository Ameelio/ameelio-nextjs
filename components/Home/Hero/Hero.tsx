import React from "react";
import { div, Typography, Row, Col } from "antd";
import Button from "components/Button";
import Image from "next/image";
import PaddedLayout from "components/Layout/PaddedLayout";
import ConnectChat from "assets/Mockups/Connect/ConnectChat.png";
import ConnectDOCDashboard from "assets/Mockups/Connect/ConnectDOCDashboard.png";

interface Props {}

const Hero = (props: Props) => {
  return (
    <div className="z-10">
      <PaddedLayout>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="flex flex-col gap-y-4">
              <Typography.Text className="text-white text-5xl	font-bold">
                Transforming America’s correctional system with technology
              </Typography.Text>

              <Typography.Text className="text-white">
                By connecting incarcerated people with support networks, we cut
                recidivism and sustainably reduce prison populations. Ameelio’s
                ecosystem of products helps everyone — from families to
                corrections officials to service providers — empowering
                successful reentry from day one.
              </Typography.Text>

              <div className="flex flex-row mt-8 gap-x-4">
                <Typography.Text className="text-white">I am:</Typography.Text>
                <Button variant="tertiary">A Loved One</Button>
                <Button variant="tertiary">Corrections Staff</Button>
                <Button variant="tertiary">An Educator</Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="mt-8">
              <Image src={ConnectChat} layout="responsive" alt="Connect call"/>
            </div>
            <div className="mt-8">
              <Image src={ConnectDOCDashboard} layout="responsive" alt="Connect call"/>
            </div>
          </div>
        </div>
      </PaddedLayout>
    </div>
  );
};

export default Hero;

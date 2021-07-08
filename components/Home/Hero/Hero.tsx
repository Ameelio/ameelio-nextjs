import React from "react";
import { Space, Typography, Row, Col } from "antd";
import Button from "components/Button";
import Mockup from "public/Mockup.png";
import Image from "next/image";
import PaddedLayout from "components/Layout/PaddedLayout";

interface Props {}

const Hero = (props: Props) => {
  return (
    <div>
      <PaddedLayout>
        <Row>
          <Col span={14}>
            <Space size="large" direction="vertical">
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

              <Space direction="horizontal" className="mt-8">
                <Typography.Text className="text-white">I am:</Typography.Text>
                <Button variant="tertiary">A Loved One</Button>
                <Button variant="tertiary">Corrections Staff</Button>
                <Button variant="tertiary">An Educator</Button>
              </Space>
            </Space>
          </Col>
          {/* <Col span={8}> */}
          {/* <Image src={Mockup} width={574} height={337} alt="Ameelio mockups" /> */}
          {/* </Col> */}
        </Row>
      </PaddedLayout>
    </div>
  );
};

export default Hero;

import React from "react";
import { Space, Typography, Row, Col } from "antd";
import Button from "components/Button";
import Mockup from "public/Mockup.png";
import Image from "next/image";
interface Props {}

const Hero = (props: Props) => {
  return (
    <Row>
      <Col span={12}>
        <Typography.Title>
          Transforming corrections with technology
        </Typography.Title>
        <Typography.Text>
          We cut recidivism and sustainably reduce prison populations. Our
          technology ecosystem connects everyone — from families to corrections
          officials to service providers — empowering successful reentry from
          day one.
        </Typography.Text>
        <Space direction="horizontal">
          <Typography.Text>I am:</Typography.Text>
          <Button>A Loved One</Button>
          <Button>Corrections Staff</Button>
          <Button>An Educator</Button>
        </Space>
      </Col>
      <Col span={12}>
        <Image src={Mockup} width={550} height={340} alt="Ameelio mockups" />
      </Col>
    </Row>
  );
};

export default Hero;

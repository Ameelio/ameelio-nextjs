import React from "react";
import { Space, Typography, Row, Col } from "antd";
import Button from "components/Button";
import Mockup from "public/Mockup.png";
import Image from "next/image";
import HeroBackground from "assets/Backgrounds/HeroBackground";

interface Props {}

const Hero = (props: Props) => {
  return (
    <Row>
      <HeroBackground className="absolute object-cover mw-screen" />
      <Col span={8} className="ameelio-layout">
        <Space size="large" direction="vertical">
          <Typography.Text className="text-white text-5xl	text-bold">
            Transforming corrections with technology
          </Typography.Text>

          <Typography.Text className="text-white">
            We cut recidivism and sustainably reduce prison populations. Our
            technology ecosystem connects everyone — from families to
            corrections officials to service providers — empowering successful
            reentry from day one.
          </Typography.Text>

          <Space direction="horizontal" className="mt-8">
            <Typography.Text className="text-white">I am:</Typography.Text>
            <Button>A Loved One</Button>
            <Button>Corrections Staff</Button>
            <Button>An Educator</Button>
          </Space>
        </Space>
      </Col>
      <Col span={8}>
        <Image src={Mockup} width={550} height={340} alt="Ameelio mockups" />
      </Col>
    </Row>
  );
};

export default Hero;

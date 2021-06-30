import { Typography, Row, Col } from "antd";
import React from "react";
import { ShowcaseItem } from "types";
import Image from "next/image";

interface Props {
  title: string;
  items: ShowcaseItem[];
  titleClassName?: string;
  itemClassName?: string;
  className?: string;
}

const Showcase = ({
  title,
  items,
  titleClassName,
  itemClassName,
  className,
}: Props) => {
  return (
    <div className={`${className} flex flex-col align-center justify-center`}>
      <Typography.Title level={3} className={titleClassName}>{title}</Typography.Title>
      <Row justify="center">
        {items.map((item) => (
          <Col
            key={item.label}
            className={`${itemClassName} h-16`}
            xs={8}
            md={6}
          >
            {item.asset ? (
              <Image
                src={item.asset}
                alt={`${item.label} logo`}
              />
            ) : (
              <Typography.Text key={item.label}>{item.label}</Typography.Text>
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Showcase;

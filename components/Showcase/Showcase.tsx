import { Typography, Row, Col } from "antd";
import React from "react";
import { ShowcaseItem } from "types";

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
  console.log(items);
  return (
    <div className={`${className} flex flex-col align-center justify-center`}>
      <Typography.Text className={titleClassName || "text-xl"}>
        {title}
      </Typography.Text>
      <Row justify="center">
        {items.map((item) => (
          <Col
            key={item.label}
            className={`${itemClassName} h-16`}
            xs={8}
            md={4}
          >
            {item.asset ? (
              item.asset
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

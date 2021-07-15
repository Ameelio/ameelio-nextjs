import { Typography, Row, Col } from "antd";
import React from "react";
import { TShowcaseItem } from "types";

export interface ShowCaseProps {
  title: string;
  items: TShowcaseItem[];
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
}: ShowCaseProps) => {
  return (
    <div className={`${className} flex flex-col text-center`}>
      <h3 className={titleClassName || "text-2xl font-bold"}>
        {title}
      </h3>
      <Row justify="center" className="flex"> 
        {items.map((item) => {
          const [lastName, ...firstNames] = item.label.split(" ").reverse();

          return (
            <Col
              key={item.label}
              className={`${itemClassName} h-16 mt-16 flex justify-center ${
                item.link ? "cursor-pointer" : ""
              }}`}
              xs={8}
              md={6}
              onClick={() => item.link && window.open(item.link, "_blank")}
            >
              {item.asset ? (
                item.asset
              ) : (
                <div className="flex flex-col align-center w-full text-center">
                  <Typography.Text className="text-gray-400 text-2xl">
                    {firstNames}
                  </Typography.Text>
                  <Typography.Text className="font-bold text-gray-400 text-2xl">
                    {lastName}
                  </Typography.Text>
                </div>
              )}
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Showcase;

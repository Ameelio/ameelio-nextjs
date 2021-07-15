import { Typography, Row, Col } from "antd";
import React from "react";
import { TShowcaseItem } from "types";
import { H2 } from "components/Typography";

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
      <H2 className={`text-2xl font-bold ${titleClassName}`}>{title}</H2>
      {/* <div className="grid grid-cols-3 md:grid-cols-4 justify-center align-center"> */}
      <div className="flex justify-center flex-wrap	 ">

        {items.map((item) => {
          const [lastName, ...firstNames] = item.label.split(" ").reverse();

          return (
            <div
              key={item.label}
              className={`${itemClassName} w-1/3 mt-16 flex justify-center ${
                item.link ? "cursor-pointer" : ""
              }}`}
              // xs={8}
              // md={6}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Showcase;

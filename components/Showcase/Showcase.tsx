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
      <H2 className={titleClassName || `text-2xl font-bold`}>{title}</H2>
      <div className="flex justify-center flex-wrap	gap-x-16 md:gap-x-0 ">

        {items.map((item) => {
          const [lastName, ...firstNames] = item.label.split(" ").reverse();

          return (
            <div
              key={item.label}
              className={`${itemClassName} w-1/3 mt-16 flex justify-center ${
                item.link ? "cursor-pointer" : ""
              }`}
              onClick={() => item.link && window.open(item.link, "_blank")}
            >
              {item.asset ? (
                item.asset
              ) : (
                <div className="flex flex-col align-center w-full text-center">
                  <span className="text-gray-400 text-2xl">
                    {firstNames.reverse().join(' ')}
                  </span>
                  <span className="font-bold text-gray-400 text-3xl">
                    {lastName}
                  </span>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Showcase;

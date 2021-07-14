import React from "react";
import { TStepByStepItem } from "types";

interface Props extends TStepByStepItem {}

const TStepByStepItemComponent = ({ index, title, desc }: Props) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <span className="text-6xl text-gray-100 font-bold absolute z-0">{index}</span>
      <span className="z-10 font-bold text-2xl">{title}</span>
      <p className="z-10 text-center">{desc}</p>
    </div>
  );
};

export default TStepByStepItemComponent;

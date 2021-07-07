import React from "react";
import { Card, Typography } from "antd";

interface Props {
  metric: string;
  label: string;
}

const MetricCard = ({ metric, label }: Props) => {
  return (
    <div className="flex flex-col align-center text-center">
      <Typography.Text className="text-blue-700 text-5xl">{metric}</Typography.Text>
      <Typography.Text>{label}</Typography.Text>
    </div>
  );
};

export default MetricCard;

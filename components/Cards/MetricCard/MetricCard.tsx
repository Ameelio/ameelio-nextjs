import React from "react";
import { Card, Typography } from "antd";

interface Props {
  metric: string;
  label: string;
}

const MetricCard = ({ metric, label }: Props) => {
  return (
    <div className="shadow-lg flex flex-col align-center rounded-sm">
      <Typography.Title level={1} className="text-blue-700">{metric}</Typography.Title>
      <Typography.Text>{label}</Typography.Text>
    </div>
  );
};

export default MetricCard;

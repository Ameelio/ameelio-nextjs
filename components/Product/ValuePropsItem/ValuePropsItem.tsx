import React from "react";
import { TValuePropItem } from "types";
import Link from 'next/link';

interface Props extends TValuePropItem {}

const ValuePropsItem = ({title, cta, body, icon}: Props) => {
  return (
    <div className="flex space-x-4" key={title}>
      <div>{icon}</div>
      <div className="flex flex-col space-y-2">
        <span className="font-bold">{title}</span>
        <p>{body}</p>
        {cta && <Link href={cta.link}>{cta.text}</Link>}
      </div>
    </div>
  );
};

export default ValuePropsItem;

import React from "react";
import { TValuePropItem } from "types";
import Link from 'components/Link';

interface Props extends TValuePropItem {}

const ValuePropsItem = ({title, cta, body, icon}: Props) => {
  return (
    <div className="flex space-x-4" key={title}>
      <div>{icon}</div>
      <div className="flex flex-col space-y-2">
        <span className="font-bold">{title}</span>
        <p>{body}</p>
        {cta && <Link text={cta.text} href={cta.link} external/>}
      </div>
    </div>
  );
};

export default ValuePropsItem;

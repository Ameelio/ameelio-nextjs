import React from "react";
import ReactPlayer from "react-player";

interface Props {
  url: string;
}

const ResponsivePlayer = ({url}: Props) => {
  return (
    <div className="relative" style={{ paddingTop: '56.25%'}}>
      <ReactPlayer
        className="absolute top-0 left-0"
        url={url}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default ResponsivePlayer;

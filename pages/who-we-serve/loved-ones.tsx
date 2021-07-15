import React from "react";
import BaseTemplate from "components/BaseTemplate";
import LovedOnes from "components/WhoWeServe/LovedOnes";

import Head from "next/head";

interface Props {}


const connect = (props: Props) => {
  return (
    <BaseTemplate>
      <Head>
        <title>Ameelio for Loved Ones: Stay in touch with your loved ones for free</title>
        <meta
          property="og:title"
          content="Ameelio Connect: Free prison communication platform"
          key="title"
        />
      </Head>
      <LovedOnes />
    </BaseTemplate>
  );
};

export default connect;

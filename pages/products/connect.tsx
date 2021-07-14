import React from "react";
import BaseTemplate from "components/BaseTemplate";
import ConnectProduct from "components/Product/ConnectProduct/ConnectProduct";

import Head from "next/head";

interface Props {}


const connect = (props: Props) => {
  return (
    <BaseTemplate>
      <Head>
        <title>Ameelio Connect: The nation’s first prison communication platform that’s free for families</title>
        <meta
          property="og:title"
          content="Ameelio Connect: Free prison communication platform"
          key="title"
        />
      </Head>
      <ConnectProduct />
    </BaseTemplate>
  );
};

export default connect;

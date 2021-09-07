import React from "react";
import BaseTemplate from "components/BaseTemplate";
import Head from "next/head";
import Educators from "components/WhoWeServe/Educators";

interface Props {}


const connect = (props: Props) => {
  return (
    <BaseTemplate>
      <Head>
        <title>Ameelio for Educators: Enhance instruction with virtual meetings and digital resources</title>
        <meta
          property="og:title"
          content="Ameelio for Educators: Enhance instruction with virtual meetings and digital resources"
          key="title"
        />
      </Head>
      <Educators />
    </BaseTemplate>
  );
};

export default connect;

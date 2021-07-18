import React from "react";
import BaseTemplate from "components/BaseTemplate";
import Head from "next/head";
import Team from "components/Team";
const LettersPage = () => {
  return (
    <BaseTemplate>
      <Head>
        <title>Ameelio Team: Free Letters & Photo Cards to Prison</title>
        <meta
          property="og:title"
          content="Ameelio Letters: Free Letters & Photo Cards to Prison"
          key="title"
        />
      </Head>
      <Team />
    </BaseTemplate>
  );
};

export default LettersPage;

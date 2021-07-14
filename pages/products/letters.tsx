import React from "react";
import BaseTemplate from "components/BaseTemplate";
import Head from "next/head";
import LettersProduct from "components/Product/LettersProduct";

const LettersPage = () => {
  return (
    <BaseTemplate>
      <Head>
        <title>Ameelio Letters: Free Letters & Photo Cards to Prison</title>
        <meta
          property="og:title"
          content="Ameelio Letters: Free Letters & Photo Cards to Prison"
          key="title"
        />
      </Head>
      <LettersProduct />
    </BaseTemplate>
  );
};

export default LettersPage;

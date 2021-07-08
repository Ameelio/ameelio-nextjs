import Head from "next/head";
import Home from "../components/Home";
import BaseTemplate from "components/BaseTemplate";
export default function HomePage() {
  return (
    <BaseTemplate>
      <Head>
        <title>Ameelio: Transforming corrections with technology</title>
        <meta
          property="og:title"
          content="Ameelio: Transforming corrections with technology"
          key="title"
        />
      </Head>
      <Home />
    </BaseTemplate>
  );
}

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
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Home />
    </BaseTemplate>
  );
}

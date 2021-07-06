import Head from "next/head";
import { Menu, Layout } from "antd";
import Footer from "../components/Footer";
import Home from "../components/Home";

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Ameelio: Transforming corrections with technology</title>
        <meta
          property="og:title"
          content="Ameelio: Transforming corrections with technology"
          key="title"
        />
      </Head>
      <Layout.Header className="bg-white">
        <Menu mode="horizontal">
          <Menu.SubMenu title="Platform">
            <Menu.Item>Connect</Menu.Item>
            <Menu.Item>Letters</Menu.Item>
          </Menu.SubMenu>

          <Menu.Item>Who We Serve</Menu.Item>
          <Menu.Item>Our Story</Menu.Item>
        </Menu>
      </Layout.Header>
      <Home />
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

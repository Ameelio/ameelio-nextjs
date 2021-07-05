import Head from "next/head";
import Image from "next/image";
import { Menu, Layout, Typography } from "antd";
import Footer from "../components/Footer";
import Logo from "public/logo.svg";
import Home from '../components/Home';
import { InferGetStaticPropsType } from 'next'
// import { FUNDERS, MEDIA } from "utils/constants";


// export async function getStaticProps() {
//   return {
//     props: {
//       media: MEDIA,
//       funders: FUNDERS,
//     },
//   };
// }
//  media, funders }: InferGetStaticPropsType<typeof getStaticProps>

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

      <Layout.Footer><Footer /></Layout.Footer>
    </Layout>
  );
}

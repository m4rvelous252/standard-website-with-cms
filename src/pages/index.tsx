import { type NextPage } from "next";
import Head from "next/head";
import Layout from "~/components/layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Website Name</title>
        <meta name="description" content="Made by DPS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="">
          Landing Page
        </div>
      </Layout>
    </>
  );
};

export default Home;
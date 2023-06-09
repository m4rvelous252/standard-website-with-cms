import { InferGetStaticPropsType, type NextPage } from "next";
import Head from "next/head";
import Layout from "~/components/layout";
import { createClient } from "prismicio";
import { AllDocumentTypes, NavbarSlice } from "prismicio-types";
import { Query } from "@prismicio/types";
import * as prismicH from '@prismicio/helpers'

const getHomePageData = (res: Query<AllDocumentTypes>) => {
  const navbarSlice = res.results[0]?.data.slices[0]

  return {
    navbar: {
      navigation: navbarSlice?.items.map(item => ({
        label: item.navigation_label as string,
        href: prismicH.asLink(item.navigation_link) || ''
      })) || [],
      logoUrl: (navbarSlice?.slice_type === 'navbar' && navbarSlice?.primary.logo.url) || ''
    }
  }
}

export const getStaticProps = async () => {
  const client = createClient()

  const res = await client.getByType("home_page")
  const page = getHomePageData(res)

  return {
    props: {
      page
    }
  }
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ page }) => {

  const { navbar } = page

  return (
    <>
      <Head>
        <title>Website Name</title>
        <meta name="description" content="Made with create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navbar={navbar}>
        <div className="">
          Landing Page
        </div>
      </Layout>
    </>
  );
};

export default Home;
import { createClient } from 'prismicio'
import React from 'react'
import Layout from '~/components/layout'
import { AllDocumentTypes, NavbarSlice } from "prismicio-types";
import { Query } from "@prismicio/types";
import * as prismicH from '@prismicio/helpers'
import { InferGetStaticPropsType, NextPage } from 'next';

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

const About: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ page }) => {
  const navbar = page.navbar
  return (
    <Layout navbar={navbar}>About</Layout>
  )
}

export default About
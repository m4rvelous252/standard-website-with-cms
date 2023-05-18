import { createClient } from "prismicio"
import ClientHighlight from "~/components/pages/home/ClientHighlight"
import HeroSection from "~/components/pages/home/HeroSection"
import * as prismicH from '@prismicio/helpers'

const fetchHomePageData = async () => {
  const client = createClient()
  const res = await client.getByUID('home_page', 'home-page')

  const heroSectionData = res.data.slices.find(slice => slice.slice_type === 'hero_section')
  const clientHighlight = res.data.slices.find(slice => slice.slice_type === 'client_highlight')

  if (heroSectionData?.slice_type !== 'hero_section' || clientHighlight?.slice_type !== 'client_highlight') return { HeroSectionProps: undefined, ClientHighlightProps: undefined }

  return {
    HeroSectionProps: {
      smallText: String(heroSectionData.primary.small_text),
      title: String(heroSectionData.primary.title),
      subTitle: String(heroSectionData.primary.sub_title),
      buttonText: String(heroSectionData.primary.button_text),
      productImgUrl: prismicH.asLink(heroSectionData.primary.product_image) || '',
      backgroundImgUrl: prismicH.asLink(heroSectionData.primary.background_image) || '',
    },
    ClientHighlightProps: {
      clients: clientHighlight.items.map(client => ({
        name: String(client.name),
        logoUrl: prismicH.asLink(client.logourl) || '',
        href: prismicH.asLink(client.href) || ''
      }))
    }
  }

}

async function Home() {
  const { HeroSectionProps, ClientHighlightProps } = await fetchHomePageData()

  if (HeroSectionProps && ClientHighlightProps) {
    return (
      <>
        <HeroSection {...HeroSectionProps} />
        <ClientHighlight {...ClientHighlightProps} />
      </>
    )
  } else {
    return (
      <div>
        ERROR
      </div>
    )
  }
}

export default Home
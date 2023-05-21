import { createClient } from "prismicio"
import ClientHighlight from "~/components/pages/home/ClientHighlight"
import HeroSection from "~/components/pages/home/HeroSection"
import FeatureSection from "~/components/pages/home/FeatureSection"
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

const FeatureSectionProps = {
  heading: 'A digital web design studio creating modern & engaging online',
  subHeading: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  bulletPoints: ['We put a lot of effort in design.', 'The most important ingredient of successful website.', 'Submit Your Orgnization.'],
  buttonText: 'Learn more',
  imgUrl: 'assets/images/growth-analytics.svg'
}

async function Home() {
  const { HeroSectionProps, ClientHighlightProps } = await fetchHomePageData()

  if (HeroSectionProps && ClientHighlightProps) {
    return (
      <>
        <HeroSection {...HeroSectionProps} />
        <ClientHighlight {...ClientHighlightProps} />
        <FeatureSection {...FeatureSectionProps} />
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
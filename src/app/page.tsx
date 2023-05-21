import { createClient } from "prismicio"
import ClientHighlight from "~/components/pages/home/ClientHighlight"
import HeroSection from "~/components/pages/home/HeroSection"
import FeatureSection from "~/components/pages/home/FeatureSection"
import * as prismicH from '@prismicio/helpers'
import ServiceSection from "~/components/pages/home/ServiceSection"

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


const ServiceSectionProps = {
  heading: 'Our Services',
  subHeading: 'We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.',
  services: [
    {
      name: 'Digital Design',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.",
    },
    {
      name: 'Unlimited Colors',
      description: "Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet Ipsum passage.",
    },
    {
      name: 'Strategy Solutions',
      description: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.",
    },
    {
      name: 'Awesome Support',
      description: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.",
    },
    {
      name: 'Truly Multipurpose',
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
    {
      name: 'Easy to customize',
      description: "Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.",
    },
    {
      name: 'Pixel Perfect Design',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.",
    },
    {
      name: 'Perfect Toolbox',
      description: "Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.",
    },
    {
      name: 'Awesome Design',
      description: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    },
  ]
}

async function Home() {
  const { HeroSectionProps, ClientHighlightProps } = await fetchHomePageData()

  if (HeroSectionProps && ClientHighlightProps) {
    return (
      <>
        <HeroSection {...HeroSectionProps} />
        <ClientHighlight {...ClientHighlightProps} />
        <FeatureSection {...FeatureSectionProps} />
        <ServiceSection {...ServiceSectionProps} />
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
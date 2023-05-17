import ClientHighlight from "~/components/pages/home/ClientHighlight"
import HeroSection from "~/components/pages/home/HeroSection"

const HeroSectionProps = {
  smallText: 'AWESOME DESIGN',
  title: 'We love make things amazing and simple',
  subTitle: 'Maecenas class semper class semper sollicitudin lectus lorem iaculis imperdiet aliquam vehicula tempor auctor curabitur pede aenean ornare.',
  buttonText: 'Get Started',
  productImgUrl: '/assets/images/home-dashboard.png',
  backgroundImgUrl: '/assets/images/img-2.jpg',
}

const ClientHighlightProps = {
  clients: [
    {
      name: 'Meta',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png',
    },
    {
      name: 'Google',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
    },
    {
      name: 'Microsoft',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png',
    },
    {
      name: 'Riot',
      logoUrl: 'https://d1.awsstatic.com/002_RG_2021_FULL_LOCKUP_RED.5627f0de6611fcc949c7966209c7b802a0724ddd.png',
    }
  ]
}

function Home() {
  return (
    <>
      <HeroSection {...HeroSectionProps} />
      <ClientHighlight {...ClientHighlightProps} />
    </>
  )
}

export default Home
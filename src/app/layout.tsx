import Footer from "~/components/layout/Footer";
import Navbar from "~/components/layout/Navbar";
import '../styles/globals.css'
import { createClient } from "prismicio"
import * as prismicH from '@prismicio/helpers'

export const metadata = {
  title: 'Website Name',
  description: 'Made with create-t3-app',
  content: 'Landing page'
};


const FooterData = {
  menu: [
    {
      title: 'DPS',
      items: [
        {
          label: 'Home',
          href: '/'
        },
        {
          label: 'About us',
          href: '/about'
        },
        {
          label: 'Careers',
          href: '/careers'
        },
        {
          label: 'Contact us',
          href: '/contact'
        },
      ]
    },
    {
      title: 'Information',
      items: [
        {
          label: 'Terms & Condition',
          href: '/terms-and-condition'
        },
        {
          label: 'Jobs',
          href: '/jobs'
        },
      ]
    },
    {
      title: 'Support',
      items: [
        {
          label: 'FAQ',
          href: '/faq'
        },
        {
          label: 'Disscusion',
          href: '/disscusion'
        },
      ]
    },
  ]
}

const fetchNavbarDocument = async () => {
  const client = createClient()
  const res = await client.getByUID('navbar', 'navbar')

  console.log(res.data.navigation_items)

  return {
    navigationItems: res.data.navigation_items.map(item => ({
      label: String(item.label),
      href: prismicH.asLink(item.href)
    })),
    logoUrl: prismicH.asImageSrc(res.data.logourl) || ''
  }
}

const fetchFooterDocument = async () => {
  const client = createClient()
  const res = await client.getByUID('footer', 'footer')

  return {
    menu: res.data.slices.map(menu => ({
      title: String(menu.primary.title),
      items: menu.items.map(item => ({
        label: String(item.label),
        href: String(item.href)
      }))
    }))
  }
}

export default async function RootLayout({ children }: {
  children: React.ReactNode,
}) {
  const [navbarData, footerData] = await Promise.all([fetchNavbarDocument(), fetchFooterDocument()])
  return (
    <html lang="en">
      <body>
        <Navbar {...navbarData} />
        <main>
          {children}
        </main>
        <Footer {...footerData} />
      </body>
    </html>
  )
}
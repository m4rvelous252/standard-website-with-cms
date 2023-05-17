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

const fetchNavbarDocument = async () => {
  const client = createClient()
  const res = await client.getByUID('navbar', 'navbar')

  return {
    navigationItems: res.data.navigation_items.map(item => ({
      label: String(item.label),
      href: prismicH.asLink(item.href)
    })),
    logoUrl: prismicH.asImageSrc(res.data.logourl) || ''
  }
}

export default async function RootLayout({ children }: {
  children: React.ReactNode,
}) {
  const navbarData = await fetchNavbarDocument()
  return (
    <html lang="en">
      <body>
        <Navbar {...navbarData} />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
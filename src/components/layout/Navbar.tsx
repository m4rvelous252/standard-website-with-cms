import Link from "next/link"
import { createClient } from "prismicio"
import * as prismicH from '@prismicio/helpers'

interface NavbarProps {
}

const fetchNavbarDocument = async () => {
  const client = createClient()
  const res = await client.getByUID('navbar', 'navbar')

  return {
    navigationItems: res.data.navigation_items.map(item => ({
      label: item.label,
      href: prismicH.asLink(item.href)
    })),
    logoUrl: prismicH.asImageSrc(res.data.logourl) || ''
  }
}

const Navbar = async () => {
  const { navigationItems, logoUrl } = await fetchNavbarDocument()
  return (
    <header className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 flex items-center py-4 gap-10 shadow-md">
        <div className="">
          <img src={logoUrl} alt="logo" className="h-8 w-auto" />
        </div>
        <ul className="flex gap-4">
          {navigationItems?.map(({ label, href }) => (
            <li key={label} className="hover:text-primary transition-colors">
              <Link href={href || ''}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
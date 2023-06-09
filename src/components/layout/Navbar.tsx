import Link from "next/link"

interface NavbarProps {
  navigation?: {
    label: string
    href: string
  }[] | undefined
  logoUrl?: string | undefined
}

const Navbar = ({ navigation, logoUrl }: NavbarProps) => {
  return (
    <header className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 flex items-center py-4 gap-10 shadow-md">
        <div className="">
          <img src={logoUrl} alt="logo" className="h-8 w-auto" />
        </div>
        <ul className="flex gap-4">
          {navigation?.map(({ label, href }) => (
            <li key={label} className="hover:text-primary transition-colors">
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
'use client'

import Link from "next/link"
import { useEffect, useRef } from "react";
import PageWidth from "./PageWidth";

interface NavbarProps {
  navigationItems: {
    label: string;
    href: string | null;
  }[];
  logoUrl: string;
}

const Navbar = ({ navigationItems, logoUrl }: NavbarProps) => {
  const navbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const navbar = navbarRef.current
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 64) {
        navbar?.classList.replace('bg-transparent', 'bg-black')
        navbar?.classList.replace('py-2', 'py-0')
      } else {
        navbar?.classList.replace('bg-black', 'bg-transparent')
        navbar?.classList.replace('py-0', 'py-2')
      }
    })
  }, [])

  return (
    <header ref={navbarRef} className="w-full fixed top-0 bg-transparent py-2 z-50 text-white transition-all duration-700">
      <PageWidth className="px-4 flex items-center py-4 gap-10">
        <div className="">
          <img src={logoUrl} alt="logo" className="h-8 w-auto" />
        </div>
        <ul className="flex gap-4">
          {navigationItems?.map(({ label, href }) => (
            <li key={label} className="hover:opacity-100 opacity-80 transition-opacity">
              <Link href={href || ''}>{label}</Link>
            </li>
          ))}
        </ul>
      </PageWidth>
    </header>
  )
}

export default Navbar
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
        navbar?.classList.replace('bg-transparent', 'bg-white')
        navbar?.classList.replace('text-white', 'text-black')
        navbar?.classList.replace('py-2', 'py-0')
        navbar?.classList.add('shadow-md')
      } else {
        navbar?.classList.replace('bg-white', 'bg-transparent')
        navbar?.classList.replace('text-black', 'text-white')
        navbar?.classList.replace('py-0', 'py-2')
        navbar?.classList.remove('shadow-md')
      }
    })
  }, [])

  return (
    <header ref={navbarRef} className="w-full fixed top-0 bg-transparent py-2 z-50 text-white transition-all duration-700">
      <PageWidth className="px-4 flex items-center py-4 gap-10">
        <div className="cursor-pointer">
          <img src={logoUrl} alt="logo" className="h-16 w-auto" />
        </div>
        <ul className="flex gap-8">
          {navigationItems?.map(({ label, href }) => (
            <li key={label} className="hover:opacity-100 opacity-70 transition-opacity">
              <Link href={href || ''}>{label}</Link>
            </li>
          ))}
        </ul>
      </PageWidth>
    </header>
  )
}

export default Navbar
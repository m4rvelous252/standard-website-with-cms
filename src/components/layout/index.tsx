import React, { type ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { LinkField } from "@prismicio/types"

interface Props {
  children?: ReactNode
  navbar?: {
    navigation: {
      label: string
      href: string
    }[]
    logoUrl: string
  }
}

const Layout = ({ children, navbar }: Props) => {
  console.log(navbar)
  return (
    <main className="w-full flex flex-col">
      <Navbar {...navbar} />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
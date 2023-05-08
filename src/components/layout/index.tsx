import React, { type ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

interface Props {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <main className="w-full flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
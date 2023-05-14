import Footer from "~/components/layout/Footer";
import Navbar from "~/components/layout/Navbar";
import '../styles/globals.css'

export const metadata = {
  title: 'Website Name',
  description: 'Made with create-t3-app',
  content: 'Landing page'
};

export default function RootLayout({ children }: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        {/* @ts-expect-error Server Component */}
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
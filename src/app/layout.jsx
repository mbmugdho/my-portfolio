import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-serif',
})

export const metadata = {
  title: "Montasir's Portfolio",
  description: 'Frontend developer portfolio showcasing projects and skills.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="mistblue"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased">
        {/* Fixed Navbar - Outside of main flow */}
        <Navbar />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}

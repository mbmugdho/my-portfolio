import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import AppShell from 'tailwind/components/animations/AppShell'
import Script from 'next/script'

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
        <AppShell>
          {/* Fixed Navbar - Outside of main flow */}
          <Navbar />

          {/* Main Content */}
          <main>{children}</main>

          {/* Footer */}
          <Footer />
        </AppShell>

        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/69710aef7c706719837b63b7/1jfgp5erc';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    `,
          }}
        />
      </body>
    </html>
  )
}

'use client'

import Link from 'next/link'
import '../../styles/footer.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about-me' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="ft">
      <div className="ft__container">
        {/* top nav row */}
        <div className="ft__top">
          <nav className="ft__nav" aria-label="Footer navigation">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="ft__link">
                {l.label}
              </Link>
            ))}
          </nav>

          <p className="ft__copy">© {year} Montasir. All rights reserved.</p>
        </div>

        {/* BIG, full-width, uppercase, tracked, bottom-cut */}
        <div className="ft__cut">
          <div className="ft__brand" aria-label="Montasir">
            Montasir
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'
import '../../styles/footer.css'



export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="ft">
      <div className="ft__container">
        {/* top nav row */}
        <div className="ft__top">
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

'use client'

import Image from 'next/image'

/* ================================
   LOGO DATA
   ================================ */
const logoItems = [
  'Next.js',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'TypeScript',
  'Tailwind CSS',
  'Vercel',
]

/* ================================
   HORIZONTAL LOGO MARQUEE
   ================================ */
function LogoMarquee() {
  // Duplicate for seamless loop
  const items = [...logoItems, ...logoItems, ...logoItems, ...logoItems]

  return (
    <div className="logo-marquee">
      <div className="logo-marquee-track">
        {items.map((label, idx) => (
          <div key={`${label}-${idx}`} className="logo-item">
            <span className="logo-icon">
              <span className="logo-icon-inner" />
            </span>
            <span className="logo-text">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ================================
   WORK CARD
   ================================ */
function WorkCard({ src, idx }) {
  return (
    <div className="work-card">
      <div className="work-card-image">
        <Image
          src={src}
          alt={`Work screenshot ${idx + 1}`}
          fill
          sizes="(max-width: 768px) 90vw, 400px"
          className="object-cover"
          priority={idx < 2}
        />
      </div>
    </div>
  )
}

/* ================================
   VERTICAL MARQUEE COLUMN
   ================================ */
function VerticalColumn({ direction = 'up', images, duration = '20s' }) {
  // Duplicate images for seamless loop
  const items = [...images, ...images, ...images, ...images]

  return (
    <div className="vmarquee-container">
      <div
        className={`vmarquee-track ${
          direction === 'down' ? 'vmarquee-track--down' : 'vmarquee-track--up'
        }`}
        style={{ '--duration': duration }}
      >
        {items.map((src, idx) => (
          <WorkCard key={`${src}-${idx}`} src={src} idx={idx} />
        ))}
      </div>
    </div>
  )
}

/* ================================
   MOBILE HORIZONTAL MARQUEE
   ================================ */
function MobileMarquee({ images }) {
  // Duplicate for seamless loop
  const items = [...images, ...images, ...images, ...images]

  return (
    <div className="mobile-marquee">
      <div className="mobile-marquee-track">
        {items.map((src, idx) => (
          <div key={`${src}-${idx}`} className="mobile-card">
            <Image
              src={src}
              alt={`Work screenshot ${idx + 1}`}
              fill
              sizes="280px"
              className="object-cover"
              priority={idx < 2}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ================================
   ABOUT SECTION
   ================================ */
export default function About() {
  const leftImages = ['/project-1.png', '/project-2.png']
  const rightImages = ['/project-3.png', '/project-4.png']
  const allImages = [...leftImages, ...rightImages]

  return (
    <section id="about" className="about-section site-container">
      {/* Logo Marquee */}
      <div className="about-animate-up about-delay-1">
        <LogoMarquee />
      </div>

      {/* Work Showcase Board */}
      <div className="work-board about-animate-up about-delay-2">
        {/* Mobile Marquee */}
        <MobileMarquee images={allImages} />

        {/* Desktop Vertical Columns */}
        <div className="work-columns">
          <VerticalColumn direction="up" images={leftImages} duration="22s" />
          <VerticalColumn
            direction="down"
            images={rightImages}
            duration="22s"
          />
        </div>

        {/* Overlay Effects */}
        <div className="work-board-overlay">
          <div className="overlay-fade" />
          <div className="overlay-glow" />
          <div className="overlay-vignette" />
          <div className="overlay-border" />
        </div>
      </div>
    </section>
  )
}

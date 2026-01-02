'use client'

import Image from 'next/image'

const logoItems = [
  'FocalPoint',
  'Screentime',
  'Segment',
  'Shutterframe',
  'Lightspeed',
  'Master',
]

function HorizontalMarquee() {
  const items = [...logoItems, ...logoItems]

  return (
    <div className="marquee w-full overflow-hidden py-8">
      <div
        className="marquee__track flex items-center gap-12 text-neutral/50"
        style={{ '--marquee-duration': '26s' }}
      >
        {items.map((label, idx) => (
          <div key={`${label}-${idx}`} className="flex items-center gap-3">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral/10">
              <span className="h-3 w-3 rounded-sm bg-neutral/30" />
            </span>
            <span className="text-lg font-medium tracking-tight">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function WorkCard({ src, idx }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-base-100 shadow-[0_18px_45px_rgba(15,23,42,0.16)] ring-1 ring-neutral/10">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={src}
          alt={`Work screenshot ${idx + 1}`}
          fill
          sizes="(max-width: 768px) 92vw, 520px"
          className="object-cover"
          priority={idx < 2}
        />
      </div>
    </div>
  )
}

function VerticalColumn({ direction = 'up', images, duration = '16s' }) {
  const items = [...images, ...images]

  return (
    <div className="vmarquee h-[520px] w-full">
      <div
        className={`vmarquee__track flex flex-col gap-6 ${
          direction === 'down' ? 'vmarquee__track--down' : 'vmarquee__track--up'
        }`}
        style={{ '--vmarquee-duration': duration }}
      >
        {items.map((src, idx) => (
          <WorkCard key={`${src}-${idx}`} src={src} idx={idx} />
        ))}
      </div>
    </div>
  )
}

function MobileImageMarquee({ images }) {
  return (
    <div className="w-full md:hidden py-4">
      <div className="flex gap-4 animate-marquee-x">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative h-40 w-56 flex-shrink-0 overflow-hidden rounded-2xl bg-base-100 shadow-[0_16px_36px_rgba(15,23,42,0.10)] ring-1 ring-neutral/15"
          >
            <Image
              src={src}
              alt={`Work screenshot ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 80vw, 320px"
              className="object-cover"
              priority={idx < 2}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  const leftImages = ['/image01.png', '/image02.png']
  const rightImages = ['/image03.png', '/image04.png']
  const allImages = [...leftImages, ...rightImages]

  return (
    <section id="about" className="site-container">
      <div className="">
        {/* Horizontal logo marquee */}
        <HorizontalMarquee />

        {/* Central board */}
        <div
          className="relative overflow-hidden rounded-[28px] p-6 md:p-8"
          style={{
            background:
              'radial-gradient(900px 520px at 50% 40%, rgba(243,246,251,0.22) 0%, rgba(243,246,251,0.10) 35%, rgba(243,246,251,0) 70%), linear-gradient(180deg, #D5E6FF 0%, #9ABFFB 100%)',
          }}
        >
          {/* Mobile marquee */}
          <MobileImageMarquee images={allImages} />

          {/* Two vertical columns use for md and lg + */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-8">
            <VerticalColumn direction="up" images={leftImages} duration="18s" />
            <VerticalColumn
              direction="down"
              images={rightImages}
              duration="18s"
            />
          </div>

          {/* Soft overlays / gradients */}
          <div className="pointer-events-none absolute inset-0 rounded-[28px]">
            {/* top/bottom shades */}
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-b from-base-100/55 via-base-100/0 to-base-100/45" />
            {/* subtle center glow */}
            <div
              className="absolute inset-0 rounded-[28px]"
              style={{
                background:
                  'radial-gradient(70% 60% at 50% 35%, rgba(243,246,251,0.28) 0%, rgba(243,246,251,0) 60%)',
              }}
            />
            {/* edge shades */}
            <div
              className="absolute inset-0 rounded-[28px]"
              style={{
                background:
                  'radial-gradient(120% 90% at 50% 50%, rgba(17,24,39,0) 62%, rgba(17,24,39,0.07) 100%)',
              }}
            />
            {/* inner soft border */}
            <div className="absolute inset-0 rounded-[28px] ring-1 ring-neutral/15" />
          </div>
        </div>
      </div>
    </section>
  )
}

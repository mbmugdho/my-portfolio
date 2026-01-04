'use client'

import RevealOnScroll from '../animations/RevealOnScroll'

export default function SectionHeading({
  kicker,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  return (
    <div className={`max-w-2xl ${alignClasses[align]} ${className}`}>
      {kicker && (
        <RevealOnScroll delay={0}>
          <p className="mb-3 text-sm font-medium text-primary uppercase tracking-wider">
            {kicker}
          </p>
        </RevealOnScroll>
      )}

      <RevealOnScroll delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral">
          {title}
        </h2>
      </RevealOnScroll>

      {description && (
        <RevealOnScroll delay={0.2}>
          <p className="mt-4 text-lg text-neutral/70 leading-relaxed">
            {description}
          </p>
        </RevealOnScroll>
      )}
    </div>
  )
}

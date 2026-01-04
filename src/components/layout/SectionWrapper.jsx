'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionWrapper({
  id,
  className = '',
  children,
  animate = true,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  if (!animate) {
    return (
      <section id={id} className={`section-padding ${className}`}>
        <div className="site-container">{children}</div>
      </section>
    )
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`section-padding ${className}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="site-container">{children}</div>
    </motion.section>
  )
}

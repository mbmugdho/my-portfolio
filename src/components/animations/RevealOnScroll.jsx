'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function RevealOnScroll({
  children,
  width = 'fit-content',
  delay = 0,
  direction = 'up', // 'up', 'down', 'left', 'right'
  duration = 0.5,
  className = '',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  const directions = {
    up: { y: 75, x: 0 },
    down: { y: -75, x: 0 },
    left: { y: 0, x: -75 },
    right: { y: 0, x: 75 },
  }

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            ...directions[direction],
            filter: 'blur(5px)',
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
            filter: 'blur(0px)',
          },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

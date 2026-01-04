'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const greetings = [
  'Hi',
  'Hello',
  'হ্যালো',
  'Hola',
  'Bonjour',
  'Ciao',
  'Hallo',
  'Olá',
  'Namaste',
  'こんにちは',
  '你好',
]

const slideUpVariants = {
  initial: {
    y: '100%',
    opacity: 0,
    filter: 'blur(4px)',
  },
  animate: {
    y: '0%',
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier
      opacity: {
        duration: 0.5,
      },
      filter: {
        duration: 0.4,
      },
    },
  },
  exit: {
    y: '-100%',
    opacity: 0,
    filter: 'blur(4px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
      opacity: {
        duration: 0.3,
      },
      filter: {
        duration: 0.3,
      },
    },
  },
}

export default function RotatingText({ interval = 3500 }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % greetings.length)
    }, interval)

    return () => clearInterval(timer)
  }, [interval])

  return (
    <span className="rotating-text-wrapper">
      <span className="rotating-text-inner">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            className="rotating-text"
            variants={slideUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {greetings[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  )
}

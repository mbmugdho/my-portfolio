'use client'

import Image from 'next/image'
import SectionWrapper from '../components/layout/SectionWrapper'
import SectionHeading from '../components/ui/SectionHeading'
import RevealOnScroll from '../components/animations/RevealOnScroll'
import { motion } from 'framer-motion'

const hobbies = [
  { title: 'Photography', emoji: '📸' },
  { title: 'Gaming', emoji: '🎮' },
  { title: 'Reading', emoji: '📚' },
  { title: 'Music', emoji: '🎵' },
  { title: 'Travel', emoji: '✈️' },
  { title: 'Coffee', emoji: '☕' },
]

export default function OffHours() {
  return (
    <SectionWrapper id="offhours">
      <SectionHeading
        kicker="Beyond Code"
        title="When I'm Not Coding"
        description="Life outside the screen - hobbies and interests that keep me inspired"
      />

      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {hobbies.map((hobby, index) => (
          <RevealOnScroll key={hobby.title} delay={index * 0.08}>
            <motion.div
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-neutral/10 shadow-md"
              whileHover={{
                y: -8,
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <span className="text-4xl">{hobby.emoji}</span>
              <span className="text-sm font-medium text-neutral/80">
                {hobby.title}
              </span>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Optional: Image gallery */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <motion.div
              className="relative aspect-square rounded-2xl overflow-hidden bg-neutral/5"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-neutral/20">
                <span className="text-sm">Photo {i}</span>
              </div>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}

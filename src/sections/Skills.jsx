'use client'

import SectionWrapper from '../components/layout/SectionWrapper'
import SectionHeading from '../components/ui/SectionHeading'
import RevealOnScroll from '../components/animations/RevealOnScroll'
import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Design',
    items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Tools',
    items: ['Git', 'VS Code', 'Vercel', 'Netlify', 'Docker'],
    color: 'from-orange-500 to-yellow-500',
  },
]

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        kicker="Expertise"
        title="Skills & Tools"
        description="Technologies and tools I use to bring ideas to life"
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <RevealOnScroll key={skill.category} delay={index * 0.1}>
            <motion.div
              className="relative p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-neutral/10 shadow-lg"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r ${skill.color}`}
              />

              <h3 className="text-lg font-semibold text-neutral mb-4">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm bg-neutral/5 rounded-full text-neutral/70 hover:bg-neutral/10 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}

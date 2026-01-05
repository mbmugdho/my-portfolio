'use client'

import { motion } from 'framer-motion'
import { Layout, Server, Wrench } from 'lucide-react'
import '../styles/skills.css'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    accent: 'accent-blue',
    percent: 94,
    skills: ['HTML/CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: Server,
    accent: 'accent-green',
    percent: 88,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Tools & Others',
    icon: Wrench,
    accent: 'accent-purple',
    percent: 92,
    skills: ['Git/GitHub', 'VS Code', 'Figma', 'Vercel'],
  },
]

function BigRing({ percent, accent, delay = 0, gradientId }) {
  const r = 46
  const c = 2 * Math.PI * r
  const dash = (percent / 100) * c

  return (
    <div className={`bigRing ${accent}`} aria-label={`${percent}%`}>
      <svg className="bigRing__svg" viewBox="0 0 120 120" role="img" aria-hidden="true">
        <defs>
          <filter id={`${gradientId}-glow`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* ring color gradient (per-card unique id to avoid collisions) */}
          <linearGradient id={`${gradientId}-stroke`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="40%" stopColor="rgba(255,255,255,0.65)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
          </linearGradient>

          {/* shimmer for the ring */}
          <linearGradient id={`${gradientId}-shine`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.45)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        <circle className="bigRing__track" cx="60" cy="60" r={r} />

        <motion.circle
          className="bigRing__progress"
          cx="60"
          cy="60"
          r={r}
          filter={`url(#${gradientId}-glow)`}
          initial={{ strokeDasharray: `0 ${c}` }}
          whileInView={{ strokeDasharray: `${dash} ${c}` }}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.6 }}
        />

        <motion.circle
          className="bigRing__shine"
          cx="60"
          cy="60"
          r={r}
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -220 }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'linear' }}
          style={{ stroke: `url(#${gradientId}-shine)` }}
        />
      </svg>

      <div className="bigRing__center">
        <div className="bigRing__value">{percent}</div>
        <div className="bigRing__pct">%</div>
      </div>
    </div>
  )
}

function CategoryCard({ category, idx }) {
  const Icon = category.icon
  const gradientId = `ring-${category.title.replace(/\s+/g, '-').toLowerCase()}-${idx}`

  return (
    <motion.div
      className={`skillsCard ${category.accent}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.12, duration: 0.55 }}
      viewport={{ once: true, amount: 0.35 }}
      whileHover={{ y: -6 }}
    >
      {/* moving mirror border */}
      <div className="skillsCard__mirror" aria-hidden="true" />

      {/* inner glass */}
      <div className="skillsCard__inner">
        <div className="skillsCard__glow" aria-hidden="true" />

        <div className="skillsCard__top">
          <div className="skillsCard__badge" aria-hidden="true">
            <Icon size={18} />
          </div>
          <div className="skillsCard__topText">
            <h3 className="skillsCard__title">{category.title}</h3>
            <p className="skillsCard__subtitle">Overall proficiency</p>
          </div>
        </div>

        <div className="skillsCard__ringWrap">
          <BigRing
            percent={category.percent}
            accent={category.accent}
            delay={idx * 0.1}
            gradientId={gradientId}
          />
        </div>

        <div className="skillsCard__list">
          {category.skills.map((s) => (
            <span className="skillsPill" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <div className="skills__header">
          <p className="skills__kicker">What I Know</p>
          <h2 className="skills__title">
            Skills <span className="skills__titleSoft">Snapshot</span>
          </h2>
          <p className="skills__desc">
            A cleaner, client-friendly overview — category strength first, then the tools inside.
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat, idx) => (
            <CategoryCard key={cat.title} category={cat} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
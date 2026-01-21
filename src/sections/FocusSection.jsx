'use client'

import { motion } from 'framer-motion'

/* ================================
   BOLT ICON
   ================================ */
const BoltIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-white"
    aria-hidden="true"
  >
    <path d="M13 2L3 14h7l-1 8 12-14h-7l-1-6z" />
  </svg>
)

/* ================================
   SKILL PILL COMPONENT
   ================================ */
function SkillPill({ colorClass, label }) {
  return (
    <div className="skill-pill">
      <span className={`skill-pill-icon ${colorClass}`}>
        <BoltIcon />
      </span>
      <span className="whitespace-nowrap font-medium text-black/80">
        {label}
      </span>
    </div>
  )
}

/* ================================
   FLOATING PILL WITH FRAMER MOTION
   ================================ */
function FloatingPill({
  children,
  duration = 3.5,
  direction = 'up',
  delay = 0,
}) {
  return (
    <motion.div
      animate={{
        y: direction === 'up' ? [0, -10, 0] : [0, 10, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  )
}

/* ================================
   FOCUS SECTION
   ================================ */
export default function FocusSection() {
  const left = [
    {
      label: 'Frontend',
      colorClass: 'skill-pill-icon--orange',
      indent: true,
      duration: 3.5,
      direction: 'up',
      delay: 0,
    },
    {
      label: 'UI & UX',
      colorClass: 'skill-pill-icon--sky',
      indent: false,
      duration: 4,
      direction: 'down',
      delay: 0.5,
    },
    {
      label: 'Components',
      colorClass: 'skill-pill-icon--neutral',
      indent: true,
      duration: 3.8,
      direction: 'up',
      delay: 1,
    },
  ]

  const right = [
    {
      label: 'Design Systems',
      colorClass: 'skill-pill-icon--yellow',
      indent: true,
      duration: 3.6,
      direction: 'down',
      delay: 0.3,
    },
    {
      label: 'Responsive',
      colorClass: 'skill-pill-icon--pink',
      indent: false,
      duration: 4.2,
      direction: 'up',
      delay: 0.8,
    },
    {
      label: 'Performance',
      colorClass: 'skill-pill-icon--green',
      indent: true,
      duration: 3.4,
      direction: 'down',
      delay: 0.6,
    },
  ]

  return (
    <section className="focus-section">
      <div className="focus-container">
        {/* Left pills */}
        <div className="focus-pills-left">
          {left.map((item, index) => (
            <div
              key={item.label}
              className={`focus-pill-item ${
                item.indent ? 'focus-pill-item--indent-left' : ''
              }`}
            >
              <FloatingPill
                duration={item.duration}
                direction={item.direction}
                delay={item.delay}
              >
                <SkillPill colorClass={item.colorClass} label={item.label} />
              </FloatingPill>
            </div>
          ))}
        </div>

        {/* Right pills */}
        <div className="focus-pills-right">
          {right.map((item, index) => (
            <div
              key={item.label}
              className={`focus-pill-item ${
                item.indent ? 'focus-pill-item--indent-right' : ''
              }`}
            >
              <FloatingPill
                duration={item.duration}
                direction={item.direction}
                delay={item.delay}
              >
                <SkillPill colorClass={item.colorClass} label={item.label} />
              </FloatingPill>
            </div>
          ))}
        </div>

        {/* Center text */}
        <div className="focus-text">
          <p className="focus-greeting">Hello!</p>
          <h2 className="focus-heading">
            Focus is on combining clear strategy, scalable frontend development,
            and user empathy to{' '}
            <span className="focus-heading-fade">
              create fast, intuitive web experiences that actually work
            </span>
          </h2>
        </div>
      </div>
    </section>
  )
}

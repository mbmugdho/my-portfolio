'use client'

import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Github, Linkedin, Facebook } from 'lucide-react'
import '../styles/about-me.css'

const timeline = [
  {
    role: 'Junior Frontend Developer',
    company: 'Remote / Freelance',
    from: '2024',
    to: 'Now',
  },
  {
    role: 'Frontend Developer',
    company: 'Personal & Client Projects',
    from: '2023',
    to: '2024',
  },
  {
    role: 'UI Designer → Frontend Developer',
    company: 'Design-to-Code Transition',
    from: '2022',
    to: '2023',
  },
  {
    role: 'Self-Taught UI Designer',
    company: 'Design Journey',
    from: '2021',
    to: '2022',
  },
]

export default function AboutMe() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const smx = useSpring(mx, { stiffness: 180, damping: 18, mass: 0.6 })
  const smy = useSpring(my, { stiffness: 180, damping: 18, mass: 0.6 })

  const rotateY = useTransform(smx, [-0.5, 0.5], [-8, 8])
  const rotateX = useTransform(smy, [-0.5, 0.5], [8, -8])
  const translateY = useTransform(smy, [-0.5, 0.5], [6, -6])

  function onMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    mx.set(px - 0.5)
    my.set(py - 0.5)
  }

  function onLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <section id="about-me" className="who">
      <div className="who__container">
        <p className="who__kicker">/ Who Am I</p>

        <h2 className="who__title" aria-label="Pushing Boundaries since 2021">
          <span className="who__titleStrong">Pushing Boundaries</span>{' '}
          <span className="who__titleSoft">since 2021</span>
        </h2>

        <div className="who__rowLayout">
          {/* LEFT */}
          <motion.div
            className="who__left"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
          >
            <div
              className="who__photoStage"
              onMouseMove={onMove}
              onMouseLeave={onLeave}
            >
              <motion.div
                className="who__photoCard who__photoCard--alive"
                style={{ rotateX, rotateY, y: translateY }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              >
                <div className="who__shine" aria-hidden="true" />
                <Image
                  src="/mugdho2.png"
                  alt="Md Montasir Billah"
                  width={1600}
                  height={1200}
                  priority
                  quality={100}
                  sizes="(max-width: 520px) 260px, (max-width: 1024px) 42vw, 520px"
                  className="who__photo"
                />
              </motion.div>
            </div>

            <div className="who__leftBar">
              <div className="who__social" aria-label="Social links">
                <a
                  className="who__icon"
                  href="https://github.com/mbmugdho"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>

                <a
                  className="who__icon"
                  href="https://www.linkedin.com/in/md-montasir-billah/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  className="who__icon"
                  href="https://web.facebook.com/mugdho7674/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>

              <div className="who__signature">
                <div className="who__sigName">Md Montasir Billah</div>
                <div className="who__sigRole">Frontend Developer</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - Bio + Timeline + Education (all inside for desktop) */}
          <motion.div
            className="who__right"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <p className="who__bio">
              A frontend developer who started with design and gradually fell in
              love with code. My background in design shapes how I think about
              structure, spacing, and interaction, while my development skills
              allow me to turn ideas into fast, responsive, and accessible web
              experiences. I enjoy building interfaces that feel intuitive and
              polished—where clean visuals, solid logic, performance, and
              genuine user empathy work together to solve real-world problems.
            </p>

            {/* Timeline + Education - Inside right column */}
            <div className="who__bottomGrid">
              <div
                className="who__timeline"
                role="list"
                aria-label="Experience timeline"
              >
                {timeline.map((item) => (
                  <div
                    className="who__item"
                    role="listitem"
                    key={`${item.role}-${item.from}`}
                  >
                    <div className="who__role">{item.role}</div>
                    <div className="who__company">{item.company}</div>
                    <div className="who__dates">
                      <span className="who__year">{item.from}</span>
                      <span className="who__arrow">→</span>
                      <span className="who__year">{item.to}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="who__edu" aria-label="Education">
                <h3 className="who__eduTitle">
                  <strong>Education</strong>
                </h3>
                <p className="who__eduText">
                  Bachelor's degree in <strong>Management</strong> from National
                  University, Bangladesh, with a strong foundation in
                  problem-solving, communication, and analytical thinking.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

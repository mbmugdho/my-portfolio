'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Briefcase, Mail } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about-me', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [hovered, setHovered] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Update active section based on scroll
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 150

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActive(NAV_ITEMS[index].id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`
        fixed top-0 left-0 right-0 z-50
        flex justify-center 
        py-3 px-4
        transition-all duration-300
        ${scrolled ? 'py-2' : 'py-3'}
      `}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className={`
          inline-flex items-center gap-1 sm:gap-2
          rounded-full
          px-2 py-1.5
          transition-all duration-300
          ${
            scrolled
              ? 'bg-neutral/95 backdrop-blur-xl shadow-lg shadow-black/10'
              : 'bg-neutral/80 backdrop-blur-md'
          }
        `}
        layout
      >
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          const isHovered = hovered === item.id
          const showIcon = isActive || isHovered

          return (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative group flex items-center
                rounded-full px-3 py-2 sm:px-4
                text-sm font-medium
                transition-colors duration-200
                overflow-hidden
                ${
                  isActive
                    ? 'bg-base-100 text-neutral shadow-sm'
                    : 'text-base-100/70 hover:text-base-100'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Icon - Slides in from left on hover/active */}
              <motion.span
                className="flex-shrink-0 hidden sm:flex items-center"
                initial={false}
                animate={{
                  opacity: showIcon ? 1 : 0,
                  x: showIcon ? 0 : -20,
                  width: showIcon ? 'auto' : 0,
                  marginRight: showIcon ? 8 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <Icon size={16} />
              </motion.span>

              {/* Mobile Icon - Always visible on mobile */}
              <span className="flex-shrink-0 sm:hidden">
                <Icon size={16} />
              </span>

              {/* Label */}
              <span className="hidden sm:inline-block">
                {item.label}
              </span>
            </motion.a>
          )
        })}
      </motion.div>
    </motion.nav>
  )
}
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Briefcase, Mail } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export default function Navbar() {
  const [active, setActive] = useState('home') 

  return (
    <nav className="sticky top-0 z-40 flex justify-center py-3 px-2">
      <div
        className="
          inline-flex items-center gap-2
          rounded-full
          bg-neutral/80 backdrop-blur
          px-2 py-1
          shadow-sm
          overflow-x-auto
          scrollbar-hide
          max-w-full
        "
      >
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id

          return (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`
                group flex items-center gap-2 rounded-full px-3 py-1
                text-sm sm:text-xs
                whitespace-nowrap
                ${isActive ? 'bg-base-100 text-neutral shadow-sm' : 'text-base-100/80'}
              `}
            >
              {/* Icon  reveal korbe hover or active */}
              <motion.span
                className="flex-shrink-0"
                initial={{ y: 6, opacity: 0 }}
                animate={isActive ? { y: 0, opacity: 1 } : {}}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Icon size={16} />
              </motion.span>

              {/* Text: slide right  on hover or active */}
              <motion.span
                initial={false}
                animate={isActive ? { x: 4 } : {}}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {item.label}
              </motion.span>
            </motion.a>
          )
        })}
      </div>
    </nav>
  )
}

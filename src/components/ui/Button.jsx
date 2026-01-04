'use client'

import { motion } from 'framer-motion'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  ...props
}) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-medium rounded-full
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `

  const variants = {
    primary: `
      bg-primary text-primary-content
      hover:bg-primary/90
      focus:ring-primary/50
      shadow-lg shadow-primary/25
    `,
    secondary: `
      bg-neutral text-base-100
      hover:bg-neutral/90
      focus:ring-neutral/50
    `,
    outline: `
      border-2 border-neutral/20
      hover:border-neutral/40 hover:bg-neutral/5
      focus:ring-neutral/20
    `,
    ghost: `
      hover:bg-neutral/5
      focus:ring-neutral/10
    `,
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const MotionComponent = href ? motion.a : motion.button

  return (
    <MotionComponent
      href={href}
      className={classes}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}

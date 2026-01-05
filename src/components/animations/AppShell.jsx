'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AppShell({ children, minDuration = 1100 }) {
  const [progress, setProgress] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let raf = 0
    const start = performance.now()

    const tick = (now) => {
      const elapsed = now - start
      const t = Math.min(1, elapsed / minDuration)
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic

      // progress curve
      const value = t < 1 ? Math.min(95, Math.round(eased * 100)) : 100
      setProgress(value)

      if (t < 1) raf = requestAnimationFrame(tick)
      else setTimeout(() => setReady(true), 200)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [minDuration])

  return (
    <>
      <AnimatePresence>
        {!ready && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background: '#ffffff',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <div
              style={{
                width: 'min(520px, calc(100% - 48px))',
                textAlign: 'center',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: 'var(--font-serif), Georgia, serif',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  color: 'rgba(17,24,39,0.92)',
                  fontSize: 'clamp(44px, 7vw, 78px)',
                  lineHeight: 0.95,
                  marginBottom: 18,
                  userSelect: 'none',
                }}
              >
                MONTASIR
              </motion.div>

              <div
                aria-label="Loading progress"
                style={{
                  height: 10,
                  borderRadius: 999,
                  background: 'rgba(17,24,39,0.08)',
                  overflow: 'hidden',
                  border: '1px solid rgba(17,24,39,0.08)',
                }}
              >
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  style={{
                    height: '100%',
                    borderRadius: 999,
                    background:
                      'linear-gradient(90deg, rgba(154,191,251,1), rgba(56,189,248,1))',
                  }}
                />
              </div>

              <div
                style={{
                  marginTop: 10,
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(17,24,39,0.55)',
                }}
              >
                {progress}%
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render the site only AFTER loader is done */}
      {ready ? children : null}
    </>
  )
}

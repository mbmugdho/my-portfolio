'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, Mail, Phone, MessageCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactCTA() {
  const TO_EMAIL = 'mdmontasirbillahmugdho@gmail.com'
  const PHONE_LOCAL = '01631371105'
  const WA_NUMBER = '8801631371105'

  const whatsappLink = useMemo(() => `https://wa.me/${WA_NUMBER}`, [])
  const mailLink = useMemo(() => `mailto:${TO_EMAIL}`, [])

  const [open, setOpen] = useState(false)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [desc, setDesc] = useState('')

  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)

    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prev
    }
  }, [open])

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus({ type: '', message: '' })

    if (!name.trim() || !phone.trim() || !email.trim() || !desc.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' })
      return
    }

    try {
      setSending(true)

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          message: desc,
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setStatus({
          type: 'error',
          message: data?.error || 'Failed to send message.',
        })
        return
      }

      setStatus({ type: 'success', message: 'Message sent successfully!' })
      setName('')
      setPhone('')
      setEmail('')
      setDesc('')
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please try again.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-24 sm:py-20 relative overflow-hidden"
      style={{ background: 'rgba(243, 246, 251, 1)' }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-140px',
          background:
            'radial-gradient(900px 520px at 50% 0%, rgba(154, 191, 251, 0.95), rgba(154, 191, 251, 0.35) 38%, rgba(243, 246, 251, 0.0) 72%)',
          filter: 'blur(22px)',
          opacity: 0.75,
          pointerEvents: 'none',
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-180px',
          background:
            'radial-gradient(700px 420px at 20% 10%, rgba(213, 230, 255, 0.65), transparent 60%), radial-gradient(700px 420px at 80% 12%, rgba(56, 189, 248, 0.22), transparent 60%)',
          pointerEvents: 'none',
          opacity: 0.65,
        }}
      />

      <div
        style={{
          width: 'min(1120px, calc(100% - 40px))',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55 }}
          style={{
            margin: 0,
            fontSize: 'clamp(44px, 6vw, 84px)',
            letterSpacing: '-0.04em',
            lineHeight: 1.02,
            fontWeight: 500,
            color: 'rgba(11, 17, 32, 0.92)',
          }}
        >
          Let's Make It Happen
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          style={{
            margin: '16px auto 0',
            maxWidth: 760,
            fontSize: 16,
            lineHeight: 1.7,
            color: 'rgba(17, 24, 39, 0.68)',
          }}
        >
          Always open to new opportunities, collaborations, and creative
          challenges. Let's work together to bring your ideas to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          style={{ marginTop: 34, display: 'flex', justifyContent: 'center' }}
        >
          {/* Button opens modal */}
          <button
            type="button"
            onClick={() => {
              setStatus({ type: '', message: '' })
              setOpen(true)
            }}
            style={{
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              height: 54,
              padding: '0 22px',
              borderRadius: 9999,
              background: 'rgba(17, 24, 39, 0.92)',
              color: '#fff',
              fontWeight: 800,
              fontSize: 14,
              letterSpacing: '-0.01em',
              boxShadow:
                '0 18px 40px rgba(15, 23, 42, 0.18), inset 0 0 0 1px rgba(255, 255, 255, 0.14)',
              transition: 'transform 150ms ease, box-shadow 150ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow =
                '0 24px 60px rgba(15, 23, 42, 0.22), inset 0 0 0 1px rgba(255, 255, 255, 0.16)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px)'
              e.currentTarget.style.boxShadow =
                '0 18px 40px rgba(15, 23, 42, 0.18), inset 0 0 0 1px rgba(255, 255, 255, 0.14)'
            }}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls="contact-modal"
          >
            <span
              aria-hidden="true"
              style={{
                width: 34,
                height: 34,
                borderRadius: 9999,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(154, 191, 251, 0.22)',
                border: '1px solid rgba(154, 191, 251, 0.25)',
              }}
            >
              <ArrowRight size={18} />
            </span>
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="contact-modal"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setOpen(false)
            }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background: 'rgba(17,24,39,0.45)',
              backdropFilter: 'blur(8px)',
              display: 'grid',
              placeItems: 'center',
              padding: 16,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: 'min(720px, 100%)',
                borderRadius: 22,
                background: 'rgba(255,255,255,0.82)',
                border: '1px solid rgba(255,255,255,0.75)',
                boxShadow: '0 34px 110px rgba(15,23,42,0.22)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* mist glow */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: '-120px',
                  background:
                    'radial-gradient(700px 420px at 30% 10%, rgba(154,191,251,0.45), transparent 60%), radial-gradient(700px 420px at 85% 20%, rgba(56,189,248,0.18), transparent 60%)',
                  pointerEvents: 'none',
                }}
              />

              <div style={{ position: 'relative', zIndex: 1, padding: 18 }}>
                {/* header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: 18,
                        fontWeight: 900,
                        letterSpacing: '-0.02em',
                        color: 'rgba(11,17,32,0.92)',
                      }}
                    >
                      Get In Touch
                    </h3>
                    <p
                      style={{
                        margin: '6px 0 0',
                        fontSize: 13,
                        lineHeight: 1.6,
                        color: 'rgba(17,24,39,0.62)',
                      }}
                    >
                      Send me a message or contact directly.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close modal"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 14,
                      border: '1px solid rgba(15,23,42,0.10)',
                      background: 'rgba(255,255,255,0.65)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* FIXED CONTACT INFO SECTION */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: 10,
                    padding: 14,
                    borderRadius: 18,
                    background: 'rgba(243,246,251,0.9)',
                    border: '1px solid rgba(15,23,42,0.08)',
                  }}
                >
                  <a
                    href={mailLink}
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      color: 'rgba(11,17,32,0.9)',
                      fontWeight: 800,
                      fontSize: 14,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 9999,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(154,191,251,0.26)',
                        border: '1px solid rgba(154,191,251,0.28)',
                      }}
                    >
                      <Mail size={16} />
                    </span>
                    {TO_EMAIL}
                  </a>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      color: 'rgba(11,17,32,0.9)',
                      fontWeight: 800,
                      fontSize: 14,
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 9999,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(154,191,251,0.26)',
                        border: '1px solid rgba(154,191,251,0.28)',
                      }}
                    >
                      <Phone size={16} />
                    </span>

                    <span>{PHONE_LOCAL}</span>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        marginLeft: 'auto',
                        height: 36,
                        padding: '0 12px',
                        borderRadius: 9999,
                        background:
                          'linear-gradient(90deg, rgba(154,191,251,0.55), rgba(56,189,248,0.30))',
                        border: '1px solid rgba(154,191,251,0.25)',
                        color: 'rgba(11,17,32,0.92)',
                        fontSize: 12,
                        fontWeight: 900,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                      }}
                    >
                      <MessageCircle size={16} />
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* FORM */}
                <form
                  onSubmit={handleSubmit}
                  style={{
                    marginTop: 14,
                    padding: 14,
                    borderRadius: 18,
                    background: 'rgba(255,255,255,0.60)',
                    border: '1px solid rgba(15,23,42,0.08)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div
                    className="ct-grid"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6,
                      }}
                    >
                      <label
                        style={{
                          fontSize: 12,
                          fontWeight: 800,
                          color: 'rgba(17,24,39,0.65)',
                        }}
                      >
                        Name
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        required
                        style={inputStyle}
                      />
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6,
                      }}
                    >
                      <label
                        style={{
                          fontSize: 12,
                          fontWeight: 800,
                          color: 'rgba(17,24,39,0.65)',
                        }}
                      >
                        Phone No
                      </label>
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="01XXXXXXXXX"
                        required
                        style={inputStyle}
                      />
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6,
                        gridColumn: '1 / -1',
                      }}
                    >
                      <label
                        style={{
                          fontSize: 12,
                          fontWeight: 800,
                          color: 'rgba(17,24,39,0.65)',
                        }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@email.com"
                        required
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: 10,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 6,
                    }}
                  >
                    <label
                      style={{
                        fontSize: 12,
                        fontWeight: 800,
                        color: 'rgba(17,24,39,0.65)',
                      }}
                    >
                      Description
                    </label>
                    <textarea
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      style={textareaStyle}
                    />
                  </div>

                  <div
                    style={{
                      marginTop: 12,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 10,
                      flexWrap: 'wrap',
                    }}
                  >
                    <div style={{ minWidth: 220 }}>
                      {status.message ? (
                        <p
                          style={{
                            margin: 0,
                            fontSize: 12,
                            fontWeight: 800,
                            color:
                              status.type === 'success'
                                ? 'rgba(34,197,94,1)'
                                : 'rgba(239,68,68,1)',
                          }}
                        >
                          {status.message}
                        </p>
                      ) : (
                        <p
                          style={{
                            margin: 0,
                            fontSize: 12,
                            color: 'rgba(17,24,39,0.58)',
                          }}
                        >
                          I usually reply within 24 hours.
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      style={{
                        height: 46,
                        padding: '0 16px',
                        borderRadius: 14,
                        border: '1px solid rgba(255,255,255,0.75)',
                        background:
                          'linear-gradient(90deg, rgba(154,191,251,1), rgba(56,189,248,1))',
                        color: 'rgba(11,17,32,0.92)',
                        fontWeight: 900,
                        fontSize: 14,
                        cursor: sending ? 'not-allowed' : 'pointer',
                        opacity: sending ? 0.7 : 1,
                        boxShadow: '0 18px 40px rgba(59,130,246,0.18)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 10,
                      }}
                    >
                      {sending ? 'Sending…' : 'Connect'}{' '}
                      <ArrowRight size={18} />
                    </button>
                  </div>

                  {/* mobile: 2 cols -> 1 col */}
                  <style jsx>{`
                    @media (max-width: 640px) {
                      .ct-grid {
                        grid-template-columns: 1fr !important;
                      }
                    }
                  `}</style>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

const inputStyle = {
  height: 44,
  padding: '0 12px',
  borderRadius: 14,
  border: '1px solid rgba(15,23,42,0.10)',
  background: 'rgba(255,255,255,0.85)',
  outline: 'none',
  fontSize: 14,
  color: 'rgba(11,17,32,0.9)',
}

const textareaStyle = {
  padding: 12,
  borderRadius: 14,
  border: '1px solid rgba(15,23,42,0.10)',
  background: 'rgba(255,255,255,0.85)',
  outline: 'none',
  fontSize: 14,
  lineHeight: 1.6,
  color: 'rgba(11,17,32,0.9)',
  resize: 'vertical',
}

import { useState } from 'react'
import type { Page } from '../App'

interface Props {
  navigate: (page: Page) => void
}

export default function ContactPage({ navigate: _navigate }: Props) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.name && form.email && form.message) {
      setSubmitted(true)
    }
  }

  const fieldStyle = (name: string) => ({
    width: '100%',
    background: focused === name ? 'rgba(8,145,178,0.08)' : 'rgba(13,32,56,0.6)',
    border: `1px solid ${focused === name ? 'rgba(8,145,178,0.6)' : 'rgba(59,119,200,0.2)'}`,
    borderRadius: 10,
    padding: '13px 16px',
    fontSize: 15,
    color: '#e8f4fd',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    transition: 'all 0.2s',
    boxSizing: 'border-box' as const,
  })

  const labelStyle = {
    display: 'block',
    fontSize: 13,
    fontWeight: 600,
    color: '#6eaae0',
    marginBottom: 8,
    letterSpacing: 0.3,
  }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <section
        style={{
          position: 'relative',
          padding: '96px 24px 56px',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 70%)',
          }}
        />
        <div style={{ position: 'relative', maxWidth: 600, margin: '0 auto' }}>
          <p
            style={{
              fontSize: 12,
              color: '#6d28d9',
              letterSpacing: 3,
              textTransform: 'uppercase',
              fontWeight: 600,
              margin: '0 0 16px',
            }}
          >
            Reach Out
          </p>
          <h1
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 700,
              color: '#f0f9ff',
              margin: '0 0 20px',
              lineHeight: 1.1,
            }}
          >
            Get in Touch
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#94b8d4', margin: 0 }}>
            Questions about the gallery, fish identification, or diving? I'd love to hear from you.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 96px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 40, alignItems: 'start' }}>
          {/* Left: Info */}
          <div>
            <div
              style={{
                borderRadius: 16,
                overflow: 'hidden',
                marginBottom: 28,
                background: '#0d2038',
                aspectRatio: '1/1',
                position: 'relative',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1675765173280-80de69ddaa11?w=500&h=500&fit=crop&auto=format"
                alt="Colorful reef fish"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(5,14,26,0.75) 0%, transparent 50%)',
                }}
              />
              <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
                <p
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 18,
                    fontStyle: 'italic',
                    color: '#f0f9ff',
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  "The ocean is the heart of our planet."
                </p>
                <p style={{ fontSize: 12, color: '#67d7ee', margin: '8px 0 0', letterSpacing: 1 }}>
                  — Sylvia Earle
                </p>
              </div>
            </div>

            <h3
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 20,
                fontWeight: 700,
                color: '#e8f4fd',
                margin: '0 0 16px',
              }}
            >
              What to expect
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '🐠', title: 'Fish ID Help', desc: 'Ask about identifying a species from your dive' },
                { icon: '📸', title: 'Photo Submissions', desc: 'Share your reef fish photos for the gallery' },
                { icon: '🤿', title: 'Diving Questions', desc: 'Tips on dive sites, gear, or PADI certifications' },
                { icon: '💡', title: 'Project Feedback', desc: 'Suggestions to improve the gallery' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'flex-start',
                    background: 'rgba(13,32,56,0.4)',
                    border: '1px solid rgba(59,119,200,0.12)',
                    borderRadius: 10,
                    padding: '12px 14px',
                  }}
                >
                  <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#e8f4fd', marginBottom: 2 }}>{item.title}</div>
                    <div style={{ fontSize: 12, color: '#6eaae0', lineHeight: 1.4 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            style={{
              background: 'rgba(13,32,56,0.6)',
              border: '1px solid rgba(59,119,200,0.15)',
              borderRadius: 20,
              padding: '40px 40px',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 56, marginBottom: 20 }}>🐠</div>
                <h2
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 28,
                    fontWeight: 700,
                    color: '#e8f4fd',
                    margin: '0 0 12px',
                  }}
                >
                  Message Sent!
                </h2>
                <p style={{ fontSize: 15, color: '#94b8d4', lineHeight: 1.7, margin: '0 0 32px' }}>
                  Thanks, {form.name}! I'll get back to you soon. In the meantime, dive into the fish gallery.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ name: '', email: '', subject: '', message: '' })
                  }}
                  style={{
                    background: 'rgba(8,145,178,0.15)',
                    border: '1px solid rgba(8,145,178,0.4)',
                    borderRadius: 10,
                    color: '#67d7ee',
                    cursor: 'pointer',
                    padding: '12px 24px',
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 26,
                    fontWeight: 700,
                    color: '#e8f4fd',
                    margin: '0 0 28px',
                  }}
                >
                  Send a Message
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                  <div>
                    <label style={labelStyle} htmlFor="name">
                      Full Name <span style={{ color: '#ea580c' }}>*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      style={fieldStyle('name')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="email">
                      Email Address <span style={{ color: '#ea580c' }}>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      style={fieldStyle('email')}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={labelStyle} htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                    style={fieldStyle('subject')}
                  />
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={labelStyle} htmlFor="message">
                    Message <span style={{ color: '#ea580c' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="Tell me about your dive, your fish sighting, or your question..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    style={{ ...fieldStyle('message'), resize: 'vertical', minHeight: 140 }}
                  />
                </div>

                {/* Required note */}
                <p style={{ fontSize: 12, color: '#4a7299', margin: '0 0 20px' }}>
                  <span style={{ color: '#ea580c' }}>*</span> Required fields
                </p>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #0891b2, #6366f1)',
                    border: 'none',
                    borderRadius: 10,
                    color: '#fff',
                    cursor: 'pointer',
                    padding: '15px',
                    fontSize: 15,
                    fontWeight: 700,
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: 0.3,
                    transition: 'transform 0.2s, opacity 0.2s',
                    boxShadow: '0 4px 24px rgba(99,102,241,0.25)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-1px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

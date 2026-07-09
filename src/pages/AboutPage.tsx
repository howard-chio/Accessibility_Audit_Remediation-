import { fishFamilies } from '../data/fishData'
import type { Page } from '../App'

interface Props {
  navigate: (page: Page) => void
}

export default function AboutPage({ navigate }: Props) {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          padding: '96px 24px 64px',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(8,145,178,0.12) 0%, transparent 70%)',
          }}
        />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <p
            style={{
              fontSize: 12,
              color: '#0891b2',
              letterSpacing: 3,
              textTransform: 'uppercase',
              fontWeight: 600,
              margin: '0 0 16px',
            }}
          >
            About This Project
          </p>
          <h1
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 700,
              color: '#f0f9ff',
              margin: '0 0 24px',
              lineHeight: 1.1,
            }}
          >
            The Fish Species Gallery
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.8,
              color: '#94b8d4',
              margin: '0 0 40px',
            }}
          >
            A visual learning project designed to help divers quickly recognize common reef fish families. It features clear photos, key identification traits, and user-friendly navigation.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
          {/* Left: About the project */}
          <div>
            <div
              style={{
                borderRadius: 16,
                overflow: 'hidden',
                marginBottom: 24,
                background: '#0d2038',
                aspectRatio: '16/9',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1637308105802-2072fe998076?w=800&h=450&fit=crop&auto=format"
                alt="Colorful reef fish school"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 28,
                fontWeight: 700,
                color: '#e8f4fd',
                margin: '0 0 16px',
              }}
            >
              What This Gallery Does
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#94b8d4', margin: '0 0 16px' }}>
              The Fish Species Gallery is a visual learning project designed to help divers quickly recognize common reef fish families. It features clear photos, key identification traits, and user-friendly navigation.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#94b8d4', margin: '0 0 24px' }}>
              The goal is to simplify fish ID practice and support divers preparing for the{' '}
              <strong style={{ color: '#67d7ee' }}>PADI AWARE – Fish Identification</strong> specialty. Each family page includes expanded photo grids, identification tips, behavioral notes, and individual species detail pages.
            </p>

            <div
              style={{
                background: 'rgba(99,102,241,0.08)',
                border: '1px solid rgba(99,102,241,0.25)',
                borderRadius: 12,
                padding: '20px 24px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#a5b4fc',
                  margin: '0 0 12px',
                }}
              >
                PADI AWARE – Fish Identification
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: '#94b8d4', margin: 0 }}>
                This specialty teaches divers to identify common reef fish families, understand their behaviors, and contribute to ocean conservation through species data collection. This gallery supports that learning journey.
              </p>
            </div>
          </div>

          {/* Right: Diver bio + skills */}
          <div>
            <div
              style={{
                background: 'rgba(13,32,56,0.7)',
                border: '1px solid rgba(59,119,200,0.15)',
                borderRadius: 16,
                overflow: 'hidden',
                marginBottom: 24,
              }}
            >
              <div style={{ position: 'relative', height: 240, background: '#0a1828' }}>
                <img
                  src="https://images.unsplash.com/photo-1583726933269-4c96def32ecd?w=800&h=400&fit=crop&auto=format"
                  alt="Underwater fish"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(5,14,26,0.85) 0%, transparent 60%)',
                  }}
                />
                <div style={{ position: 'absolute', bottom: 20, left: 24 }}>
                  <h3
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 22,
                      fontWeight: 700,
                      color: '#f0f9ff',
                      margin: '0 0 4px',
                    }}
                  >
                    About the Diver
                  </h3>
                  <p style={{ fontSize: 12, color: '#67d7ee', margin: 0, letterSpacing: 1 }}>
                    Advanced Open Water · Enriched Air Diver
                  </p>
                </div>
              </div>
              <div style={{ padding: '24px 24px 28px' }}>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: '#94b8d4', margin: 0 }}>
                  I'm a passionate diver dedicated to helping others explore and understand the underwater world. With certifications in Advanced Open Water and Enriched Air Diver, I enjoy studying marine life — especially fish families and their unique traits. Through my personal projects, I aim to make fish identification clearer, accessible, and enjoyable for divers at any level.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <h3
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 20,
                fontWeight: 700,
                color: '#e8f4fd',
                margin: '0 0 16px',
              }}
            >
              Certifications & Qualifications
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: '🤿', cert: 'Advanced Open Water Diver', org: 'PADI', color: '#0891b2' },
                { icon: '💨', cert: 'Enriched Air Diver (Nitrox)', org: 'PADI', color: '#0891b2' },
                { icon: '🐟', cert: 'AWARE Fish Identification', org: 'PADI Specialty', color: '#059669' },
                { icon: '🌊', cert: 'Marine Ecology Enthusiast', org: 'Self-Directed Study', color: '#6366f1' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    background: 'rgba(13,32,56,0.5)',
                    border: `1px solid ${item.color}25`,
                    borderRadius: 10,
                    padding: '12px 16px',
                  }}
                >
                  <span style={{ fontSize: 22 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#e8f4fd' }}>{item.cert}</div>
                    <div style={{ fontSize: 12, color: item.color }}>{item.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Family coverage section */}
        <div style={{ marginTop: 64 }}>
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 700,
              color: '#e8f4fd',
              margin: '0 0 8px',
            }}
          >
            Fish Families Covered
          </h2>
          <p style={{ fontSize: 15, color: '#6eaae0', margin: '0 0 32px' }}>
            Six key families every reef diver should know
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {fishFamilies.map(family => (
              <button
                key={family.id}
                onClick={() => navigate({ id: 'family', familyId: family.id })}
                style={{
                  background: `linear-gradient(135deg, ${family.color}18, ${family.color}08)`,
                  border: `1px solid ${family.color}30`,
                  borderRadius: 12,
                  padding: '20px 20px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'transform 0.2s, border-color 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.borderColor = family.color + '60'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.borderColor = family.color + '30'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h3
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 18,
                      fontWeight: 700,
                      color: '#e8f4fd',
                      margin: 0,
                    }}
                  >
                    {family.name}
                  </h3>
                  <span
                    style={{
                      background: family.color,
                      borderRadius: 100,
                      width: 28,
                      height: 28,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 12,
                      fontWeight: 700,
                      color: '#fff',
                      flexShrink: 0,
                    }}
                  >
                    {family.species.length}
                  </span>
                </div>
                <div style={{ fontSize: 11, color: family.color, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600 }}>
                  {family.scientificFamily}
                </div>
                <div style={{ fontSize: 13, color: '#6eaae0', lineHeight: 1.5 }}>
                  {family.identificationTips[0]}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 64, textAlign: 'center' }}>
          <button
            onClick={() => navigate({ id: 'gallery' })}
            style={{
              background: 'linear-gradient(135deg, #0891b2, #6366f1)',
              border: 'none',
              borderRadius: 12,
              color: '#fff',
              cursor: 'pointer',
              padding: '16px 36px',
              fontSize: 16,
              fontWeight: 700,
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 8px 32px rgba(99,102,241,0.25)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
          >
            Explore the Species Gallery →
          </button>
        </div>
      </section>
    </div>
  )
}

import { fishFamilies } from '../data/fishData'
import type { Page } from '../App'

interface Props {
  navigate: (page: Page) => void
}

export default function GalleryPage({ navigate }: Props) {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          height: 360,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1800&h=600&fit=crop&auto=format"
          alt="School of reef fish"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(5,14,26,0.88) 0%, rgba(7,21,37,0.65) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 120,
            background: 'linear-gradient(to top, #071525, transparent)',
          }}
        />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 24px', width: '100%' }}>
          <p
            style={{
              fontSize: 12,
              color: '#0891b2',
              letterSpacing: 3,
              textTransform: 'uppercase',
              fontWeight: 600,
              margin: '0 0 12px',
            }}
          >
            Visual Field Guide
          </p>
          <h1
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 700,
              color: '#f0f9ff',
              margin: '0 0 16px',
              lineHeight: 1.1,
            }}
          >
            Fish Species Gallery
          </h1>
          <p style={{ fontSize: 16, color: '#a8d4f5', margin: 0, maxWidth: 500 }}>
            Six reef fish families — organized for visual recognition. Select a family to explore expanded photo grids and individual species profiles.
          </p>
        </div>
      </section>

      {/* Family Grid */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 96px' }}>
        <p style={{ fontSize: 13, color: '#6eaae0', margin: '0 0 32px' }}>
          {fishFamilies.length} families · {fishFamilies.reduce((n, f) => n + f.species.length, 0)} species profiled
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 24 }}>
          {fishFamilies.map(family => (
            <button
              key={family.id}
              onClick={() => navigate({ id: 'family', familyId: family.id })}
              style={{
                background: 'rgba(13,32,56,0.55)',
                border: '1px solid rgba(59,119,200,0.1)',
                borderRadius: 18,
                overflow: 'hidden',
                cursor: 'pointer',
                textAlign: 'left',
                padding: 0,
                transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s',
                display: 'block',
                width: '100%',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = `0 16px 48px ${family.color}22`
                e.currentTarget.style.borderColor = family.color + '50'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'rgba(59,119,200,0.1)'
              }}
            >
              {/* Cover image with mini-strip */}
              <div style={{ position: 'relative', height: 200, background: '#0a1828', overflow: 'hidden' }}>
                <img
                  src={family.coverImage}
                  alt={`${family.name}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(5,14,26,0.85) 0%, transparent 55%)',
                  }}
                />

                {/* Family color bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: `linear-gradient(90deg, ${family.color}, ${family.darkColor})`,
                  }}
                />

                {/* Sci name tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    background: `${family.color}cc`,
                    borderRadius: 100,
                    padding: '4px 12px',
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#fff',
                    letterSpacing: 0.8,
                    fontStyle: 'italic',
                  }}
                >
                  {family.scientificFamily}
                </div>

                {/* Species count */}
                <div
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    background: 'rgba(5,14,26,0.75)',
                    borderRadius: 8,
                    padding: '4px 10px',
                    fontSize: 12,
                    color: '#a8d4f5',
                    fontWeight: 500,
                  }}
                >
                  {family.species.length} species
                </div>

                {/* Mini photo strip at bottom */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    gap: 3,
                    padding: '0 0 0 0',
                    height: 50,
                  }}
                >
                  {family.species.slice(0, 4).map(fish => (
                    <div
                      key={fish.id}
                      style={{
                        flex: 1,
                        overflow: 'hidden',
                        background: '#0d2038',
                        opacity: 0.85,
                      }}
                    >
                      <img
                        src={fish.image + '&w=120&h=80'}
                        alt={fish.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '22px 22px 26px' }}>
                <h2
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 24,
                    fontWeight: 700,
                    color: '#e8f4fd',
                    margin: '0 0 10px',
                  }}
                >
                  {family.name}
                </h2>
                <p
                  style={{
                    fontSize: 13,
                    color: '#6eaae0',
                    lineHeight: 1.65,
                    margin: '0 0 18px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {family.description}
                </p>

                {/* Quick ID tags */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 10, color: '#4a7299', letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, marginBottom: 8 }}>
                    Quick ID traits
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {family.identificationTips.slice(0, 3).map((tip, i) => (
                      <span
                        key={i}
                        style={{
                          background: `${family.color}15`,
                          border: `1px solid ${family.color}30`,
                          borderRadius: 6,
                          padding: '3px 9px',
                          fontSize: 11,
                          color: family.color,
                          fontWeight: 500,
                          lineHeight: 1.4,
                        }}
                      >
                        {tip.length > 32 ? tip.slice(0, 30) + '…' : tip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Regions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 11, color: '#4a7299' }}>📍</span>
                  <span style={{ fontSize: 12, color: '#4a7299' }}>
                    {family.commonRegions.slice(0, 2).join(' · ')}
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div
                style={{
                  borderTop: `1px solid ${family.color}20`,
                  padding: '14px 22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontSize: 13, color: '#6eaae0' }}>Explore family →</span>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: family.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 13,
                  }}
                >
                  →
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}

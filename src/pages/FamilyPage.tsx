import { getFamilyById } from '../data/fishData'
import type { Page } from '../App'

interface Props {
  familyId: string
  navigate: (page: Page) => void
}

export default function FamilyPage({ familyId, navigate }: Props) {
  const family = getFamilyById(familyId)

  if (!family) {
    return (
      <div style={{ padding: 80, textAlign: 'center', color: '#6eaae0' }}>
        <p>Family not found.</p>
        <button onClick={() => navigate({ id: 'gallery' })} style={{ color: '#67d7ee', background: 'none', border: 'none', cursor: 'pointer', fontSize: 15 }}>
          ← Back to Gallery
        </button>
      </div>
    )
  }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero */}
      <section style={{ position: 'relative', height: 480, overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <img
          src={family.heroImage}
          alt={`${family.name} reef fish`}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to top, ${family.darkColor}f0 0%, rgba(5,14,26,0.4) 50%, rgba(5,14,26,0.2) 100%)`,
          }}
        />
        {/* Color bar top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            background: `linear-gradient(90deg, ${family.color}, ${family.darkColor})`,
          }}
        />

        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 24px 48px', width: '100%' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 20 }}>
            <button
              onClick={() => navigate({ id: 'home' })}
              style={{ background: 'none', border: 'none', color: '#94b8d4', cursor: 'pointer', fontSize: 13, padding: 0, fontFamily: 'Inter, sans-serif' }}
            >
              Home
            </button>
            <span style={{ color: '#4a7299', fontSize: 13 }}>›</span>
            <button
              onClick={() => navigate({ id: 'gallery' })}
              style={{ background: 'none', border: 'none', color: '#94b8d4', cursor: 'pointer', fontSize: 13, padding: 0, fontFamily: 'Inter, sans-serif' }}
            >
              Fish Gallery
            </button>
            <span style={{ color: '#4a7299', fontSize: 13 }}>›</span>
            <span style={{ color: family.color, fontSize: 13, fontWeight: 600 }}>{family.name}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <div
                style={{
                  display: 'inline-block',
                  background: family.color,
                  borderRadius: 100,
                  padding: '4px 14px',
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#fff',
                  fontStyle: 'italic',
                  letterSpacing: 0.5,
                  marginBottom: 14,
                }}
              >
                {family.scientificFamily}
              </div>
              <h1
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(40px, 6vw, 72px)',
                  fontWeight: 700,
                  color: '#f0f9ff',
                  margin: '0 0 16px',
                  lineHeight: 1.05,
                }}
              >
                {family.name}
              </h1>
              <p style={{ fontSize: 16, color: '#a8d4f5', margin: 0, maxWidth: 580, lineHeight: 1.7 }}>
                {family.description}
              </p>
            </div>
            <div
              style={{
                background: 'rgba(5,14,26,0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(59,119,200,0.2)',
                borderRadius: 14,
                padding: '20px 24px',
                minWidth: 200,
              }}
            >
              <div style={{ fontSize: 11, color: '#4a7299', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Family Stats</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24 }}>
                  <span style={{ fontSize: 13, color: '#6eaae0' }}>Species profiled</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: family.color }}>{family.species.length}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24 }}>
                  <span style={{ fontSize: 13, color: '#6eaae0' }}>ID traits</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: family.color }}>{family.identificationTips.length}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24 }}>
                  <span style={{ fontSize: 13, color: '#6eaae0' }}>Regions</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: family.color }}>{family.commonRegions.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 96px' }}>
        {/* Two-column: ID Guide + Regions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 56 }}>
          {/* ID Tips */}
          <div
            style={{
              background: `${family.color}0c`,
              border: `1px solid ${family.color}25`,
              borderRadius: 16,
              padding: '28px 28px',
            }}
          >
            <h3
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 20,
                fontWeight: 700,
                color: '#e8f4fd',
                margin: '0 0 20px',
              }}
            >
              Identification Guide
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {family.identificationTips.map((tip, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'flex-start',
                    background: 'rgba(5,14,26,0.3)',
                    borderRadius: 10,
                    padding: '11px 14px',
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      background: family.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 11,
                      fontWeight: 700,
                      color: '#fff',
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    {i + 1}
                  </div>
                  <span style={{ fontSize: 14, color: '#a8d4f5', lineHeight: 1.5 }}>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Common Regions */}
          <div
            style={{
              background: 'rgba(13,32,56,0.5)',
              border: '1px solid rgba(59,119,200,0.12)',
              borderRadius: 16,
              padding: '28px 28px',
            }}
          >
            <h3
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 20,
                fontWeight: 700,
                color: '#e8f4fd',
                margin: '0 0 20px',
              }}
            >
              Common Regions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {family.commonRegions.map((region, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    background: 'rgba(5,14,26,0.3)',
                    borderRadius: 10,
                    padding: '13px 16px',
                  }}
                >
                  <span style={{ fontSize: 18 }}>🌊</span>
                  <span style={{ fontSize: 14, color: '#94b8d4', fontWeight: 500 }}>{region}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24, padding: '16px', background: 'rgba(5,14,26,0.3)', borderRadius: 10 }}>
              <p style={{ fontSize: 12, color: '#4a7299', lineHeight: 1.6, margin: 0 }}>
                💡 <strong style={{ color: '#6eaae0' }}>Diver tip:</strong> When you spot a {family.name.toLowerCase()}, look for the key ID traits listed. Note depth, location, and any companions to help narrow your identification.
              </p>
            </div>
          </div>
        </div>

        {/* EXPANDED PHOTO GRID */}
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 12, color: family.color, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600, margin: '0 0 8px' }}>
            Photo Reference Grid
          </p>
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 700,
              color: '#e8f4fd',
              margin: '0 0 8px',
            }}
          >
            {family.name} Species
          </h2>
          <p style={{ fontSize: 14, color: '#6eaae0', margin: '0 0 32px' }}>
            Select any species card to view its full identification profile
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {family.species.map(fish => (
            <button
              key={fish.id}
              onClick={() => navigate({ id: 'fish', familyId: family.id, fishId: fish.id })}
              style={{
                background: 'rgba(13,32,56,0.55)',
                border: `1px solid ${family.color}18`,
                borderRadius: 16,
                overflow: 'hidden',
                cursor: 'pointer',
                textAlign: 'left',
                padding: 0,
                transition: 'transform 0.25s, border-color 0.25s, box-shadow 0.25s',
                display: 'flex',
                flexDirection: 'row',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = family.color + '50'
                e.currentTarget.style.boxShadow = `0 12px 40px ${family.color}18`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.borderColor = family.color + '18'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Photo */}
              <div style={{ width: 200, flexShrink: 0, background: '#0a1828', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={fish.image + '&w=300&h=240'}
                  alt={fish.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                {/* Gradient overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, transparent 60%, rgba(13,32,56,0.4))',
                  }}
                />
              </div>

              {/* Info */}
              <div style={{ flex: 1, padding: '20px 20px' }}>
                <div
                  style={{
                    fontSize: 11,
                    color: family.color,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  {fish.conservationStatus}
                </div>
                <h3
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#e8f4fd',
                    margin: '0 0 2px',
                    lineHeight: 1.25,
                  }}
                >
                  {fish.name}
                </h3>
                <p
                  style={{
                    fontSize: 12,
                    color: '#4a7299',
                    margin: '0 0 12px',
                    fontStyle: 'italic',
                  }}
                >
                  {fish.scientificName}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
                  {[
                    { icon: '📐', label: 'Size', value: fish.size },
                    { icon: '🌊', label: 'Depth', value: fish.depth },
                    { icon: '📍', label: 'Region', value: fish.region },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                      <span style={{ fontSize: 12 }}>{item.icon}</span>
                      <span style={{ fontSize: 11, color: '#4a7299', minWidth: 40 }}>{item.label}</span>
                      <span style={{ fontSize: 12, color: '#94b8d4', fontWeight: 500 }}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    background: `${family.color}12`,
                    border: `1px solid ${family.color}25`,
                    borderRadius: 8,
                    padding: '8px 10px',
                    fontSize: 11,
                    color: '#a8d4f5',
                    lineHeight: 1.5,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  <strong style={{ color: family.color }}>Key marking:</strong> {fish.keyMarkings}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Back nav */}
        <div style={{ marginTop: 48, display: 'flex', gap: 12 }}>
          <button
            onClick={() => navigate({ id: 'gallery' })}
            style={{
              background: 'rgba(13,32,56,0.5)',
              border: '1px solid rgba(59,119,200,0.2)',
              borderRadius: 10,
              color: '#6eaae0',
              cursor: 'pointer',
              padding: '12px 22px',
              fontSize: 14,
              fontFamily: 'Inter, sans-serif',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(59,119,200,0.5)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(59,119,200,0.2)')}
          >
            ← All Families
          </button>
        </div>
      </div>
    </div>
  )
}

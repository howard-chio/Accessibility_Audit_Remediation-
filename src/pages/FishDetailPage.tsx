import { getFamilyById, getFishById } from '../data/fishData'
import type { Page } from '../App'

interface Props {
  familyId: string
  fishId: string
  navigate: (page: Page) => void
}

export default function FishDetailPage({ familyId, fishId, navigate }: Props) {
  const family = getFamilyById(familyId)
  const fish = getFishById(familyId, fishId)

  if (!family || !fish) {
    return (
      <div style={{ padding: 80, textAlign: 'center', color: '#6eaae0' }}>
        <p>Species not found.</p>
        <button onClick={() => navigate({ id: 'gallery' })} style={{ color: '#67d7ee', background: 'none', border: 'none', cursor: 'pointer', fontSize: 15 }}>
          ← Back to Gallery
        </button>
      </div>
    )
  }

  const otherSpecies = family.species.filter(f => f.id !== fish.id)
  const statusColor: Record<string, string> = {
    'Least Concern': '#059669',
    'Near Threatened': '#d97706',
    'Vulnerable': '#f59e0b',
    'Endangered': '#dc2626',
    'Critically Endangered': '#7f1d1d',
  }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero */}
      <section style={{ position: 'relative', height: 520, overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <img
          src={fish.image + '&w=1800&h=800'}
          alt={fish.name}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to top, rgba(5,14,26,0.97) 0%, rgba(5,14,26,0.5) 45%, rgba(5,14,26,0.15) 100%)`,
          }}
        />
        {/* Color bar */}
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
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 24 }}>
            {[
              { label: 'Home', action: () => navigate({ id: 'home' }) },
              { label: 'Gallery', action: () => navigate({ id: 'gallery' }) },
              { label: family.name, action: () => navigate({ id: 'family', familyId: family.id }) },
              { label: fish.name, action: null },
            ].map((crumb, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {i > 0 && <span style={{ color: '#2d4a6b', fontSize: 13 }}>›</span>}
                {crumb.action ? (
                  <button
                    onClick={crumb.action}
                    style={{ background: 'none', border: 'none', color: '#6eaae0', cursor: 'pointer', fontSize: 13, padding: 0, fontFamily: 'Inter, sans-serif' }}
                  >
                    {crumb.label}
                  </button>
                ) : (
                  <span style={{ color: family.color, fontSize: 13, fontWeight: 600 }}>{crumb.label}</span>
                )}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
            <div style={{ maxWidth: 600 }}>
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
                  marginBottom: 14,
                }}
              >
                {family.name}
              </div>
              <h1
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(36px, 5vw, 64px)',
                  fontWeight: 700,
                  color: '#f0f9ff',
                  margin: '0 0 8px',
                  lineHeight: 1.05,
                }}
              >
                {fish.name}
              </h1>
              <p
                style={{
                  fontSize: 20,
                  color: '#4a7299',
                  fontStyle: 'italic',
                  fontFamily: 'Playfair Display, serif',
                  margin: '0 0 20px',
                }}
              >
                {fish.scientificName}
              </p>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: `${statusColor[fish.conservationStatus] ?? '#059669'}20`,
                  border: `1px solid ${statusColor[fish.conservationStatus] ?? '#059669'}50`,
                  borderRadius: 100,
                  padding: '5px 14px',
                  fontSize: 12,
                  fontWeight: 600,
                  color: statusColor[fish.conservationStatus] ?? '#059669',
                }}
              >
                <span>●</span> {fish.conservationStatus}
              </div>
            </div>

            {/* Quick stats card */}
            <div
              style={{
                background: 'rgba(5,14,26,0.8)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(59,119,200,0.2)',
                borderRadius: 16,
                padding: '22px 26px',
                minWidth: 220,
              }}
            >
              {[
                { emoji: '📏', label: 'Max Size', value: fish.size },
                { emoji: '🌊', label: 'Depth Range', value: fish.depth },
                { emoji: '📍', label: 'Region', value: fish.region },
                { emoji: '🍽', label: 'Diet', value: fish.diet.split(',')[0] },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', gap: 20, marginBottom: 12 }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span>{item.emoji}</span>
                    <span style={{ fontSize: 12, color: '#4a7299' }}>{item.label}</span>
                  </div>
                  <span style={{ fontSize: 12, color: '#a8d4f5', fontWeight: 600, textAlign: 'right', maxWidth: 130 }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detail content */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 96px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 40 }}>
          {/* Key Markings */}
          <InfoCard
            title="Key Markings"
            icon="🎨"
            color={family.color}
            content={fish.keyMarkings}
          />
          {/* Body Shape */}
          <InfoCard
            title="Body Shape"
            icon="🐟"
            color={family.color}
            content={fish.bodyShape}
          />
          {/* Diet */}
          <InfoCard
            title="Diet"
            icon="🍽"
            color={family.color}
            content={fish.diet}
          />
          {/* Behavior */}
          <InfoCard
            title="Behavior"
            icon="🌀"
            color={family.color}
            content={fish.behavior}
          />
        </div>

        {/* Fun Fact Banner */}
        <div
          style={{
            background: `linear-gradient(135deg, ${family.color}15, ${family.color}08)`,
            border: `1px solid ${family.color}35`,
            borderRadius: 16,
            padding: '28px 32px',
            marginBottom: 48,
            display: 'flex',
            gap: 20,
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              fontSize: 32,
              background: family.color,
              width: 52,
              height: 52,
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            💡
          </div>
          <div>
            <div
              style={{
                fontSize: 11,
                color: family.color,
                letterSpacing: 2,
                textTransform: 'uppercase',
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              Did You Know?
            </div>
            <p
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 18,
                fontStyle: 'italic',
                color: '#e8f4fd',
                margin: 0,
                lineHeight: 1.65,
              }}
            >
              "{fish.funFact}"
            </p>
          </div>
        </div>

        {/* Full info sections */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 56 }}>
          {/* Full diet */}
          <div
            style={{
              background: 'rgba(13,32,56,0.5)',
              border: '1px solid rgba(59,119,200,0.12)',
              borderRadius: 16,
              padding: '24px 24px',
            }}
          >
            <h3
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 18,
                fontWeight: 700,
                color: '#e8f4fd',
                margin: '0 0 12px',
              }}
            >
              Full Diet Profile
            </h3>
            <p style={{ fontSize: 14, color: '#94b8d4', lineHeight: 1.7, margin: 0 }}>{fish.diet}</p>
          </div>

          {/* Behavior */}
          <div
            style={{
              background: 'rgba(13,32,56,0.5)',
              border: '1px solid rgba(59,119,200,0.12)',
              borderRadius: 16,
              padding: '24px 24px',
            }}
          >
            <h3
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 18,
                fontWeight: 700,
                color: '#e8f4fd',
                margin: '0 0 12px',
              }}
            >
              Behavior Notes
            </h3>
            <p style={{ fontSize: 14, color: '#94b8d4', lineHeight: 1.7, margin: 0 }}>{fish.behavior}</p>
          </div>
        </div>

        {/* Other species in family */}
        {otherSpecies.length > 0 && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
              <div>
                <p style={{ fontSize: 11, color: family.color, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 600, margin: '0 0 6px' }}>
                  Same Family
                </p>
                <h2
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 26,
                    fontWeight: 700,
                    color: '#e8f4fd',
                    margin: 0,
                  }}
                >
                  Other {family.name} Species
                </h2>
              </div>
              <button
                onClick={() => navigate({ id: 'family', familyId: family.id })}
                style={{
                  background: 'none',
                  border: `1px solid ${family.color}40`,
                  borderRadius: 8,
                  color: family.color,
                  cursor: 'pointer',
                  padding: '9px 18px',
                  fontSize: 13,
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                }}
              >
                View All {family.name} →
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {otherSpecies.slice(0, 3).map(other => (
                <button
                  key={other.id}
                  onClick={() => navigate({ id: 'fish', familyId: family.id, fishId: other.id })}
                  style={{
                    background: 'rgba(13,32,56,0.5)',
                    border: `1px solid ${family.color}18`,
                    borderRadius: 14,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                    transition: 'transform 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.borderColor = family.color + '50'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'none'
                    e.currentTarget.style.borderColor = family.color + '18'
                  }}
                >
                  <div style={{ height: 160, background: '#0a1828', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={other.image + '&w=400&h=250'}
                      alt={other.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(5,14,26,0.7) 0%, transparent 50%)',
                      }}
                    />
                  </div>
                  <div style={{ padding: '14px 16px 18px' }}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontWeight: 700, color: '#e8f4fd', marginBottom: 2 }}>
                      {other.name}
                    </div>
                    <div style={{ fontSize: 12, color: '#4a7299', fontStyle: 'italic', marginBottom: 8 }}>
                      {other.scientificName}
                    </div>
                    <div style={{ fontSize: 12, color: '#6eaae0' }}>{other.depth} · {other.size}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Nav buttons */}
        <div style={{ marginTop: 48, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button
            onClick={() => navigate({ id: 'family', familyId: family.id })}
            style={{
              background: `${family.color}18`,
              border: `1px solid ${family.color}35`,
              borderRadius: 10,
              color: family.color,
              cursor: 'pointer',
              padding: '12px 22px',
              fontSize: 14,
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              transition: 'all 0.2s',
            }}
          >
            ← All {family.name}
          </button>
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
          >
            All Families
          </button>
        </div>
      </div>
    </div>
  )
}

function InfoCard({ title, icon, color, content }: { title: string; icon: string; color: string; content: string }) {
  return (
    <div
      style={{
        background: 'rgba(13,32,56,0.5)',
        border: `1px solid ${color}18`,
        borderRadius: 14,
        padding: '20px 22px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: `${color}25`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
          }}
        >
          {icon}
        </div>
        <h4
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 16,
            fontWeight: 700,
            color: '#e8f4fd',
            margin: 0,
          }}
        >
          {title}
        </h4>
      </div>
      <p style={{ fontSize: 14, color: '#94b8d4', lineHeight: 1.65, margin: 0 }}>{content}</p>
    </div>
  )
}

import { fishFamilies, type FishFamily } from '../data/fishData'
import type { Page } from '../App'

interface Props {
  navigate: (page: Page) => void
}

export default function HomePage({ navigate }: Props) {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* HERO */}
      <section
        style={{
          position: 'relative',
          height: '92vh',
          minHeight: 600,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1637308107894-0971cb8622ed?w=1800&h=1000&fit=crop&auto=format"
          alt="School of fish swimming over a coral reef"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        {/* Multi-layer gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(5,14,26,0.85) 0%, rgba(7,21,37,0.6) 50%, rgba(5,14,26,0.75) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 200,
            background: 'linear-gradient(to top, #071525, transparent)',
          }}
        />

        <div
          style={{
            position: 'relative',
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px',
            width: '100%',
          }}
        >
          <div style={{ maxWidth: 680 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(8, 145, 178, 0.15)',
                border: '1px solid rgba(8, 145, 178, 0.4)',
                borderRadius: 100,
                padding: '6px 14px',
                fontSize: 12,
                color: '#67d7ee',
                letterSpacing: 2,
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: 24,
              }}
            >
              <span>●</span> PADI AWARE Fish Identification
            </div>
            <h1
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(42px, 6vw, 80px)',
                fontWeight: 700,
                color: '#f0f9ff',
                lineHeight: 1.08,
                margin: '0 0 24px',
                letterSpacing: -1,
              }}
            >
              Explore the
              <br />
              <em style={{ color: '#67d7ee', fontStyle: 'italic' }}>Living Reef</em>
            </h1>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: '#a8d4f5',
                margin: '0 0 40px',
                maxWidth: 520,
              }}
            >
              A visual field guide to reef fish families — built for divers who want to identify species quickly and understand the underwater world with confidence.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate({ id: 'gallery' })}
                style={{
                  background: 'linear-gradient(135deg, #0891b2, #6366f1)',
                  border: 'none',
                  borderRadius: 10,
                  color: '#fff',
                  cursor: 'pointer',
                  padding: '14px 28px',
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: 0.2,
                  transition: 'transform 0.2s, opacity 0.2s',
                }}
                onMouseEnter={e => ((e.currentTarget.style.transform = 'translateY(-2px)'))}
                onMouseLeave={e => ((e.currentTarget.style.transform = 'none'))}
              >
                Browse Fish Families →
              </button>
              <button
                onClick={() => navigate({ id: 'about' })}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(168, 212, 245, 0.25)',
                  borderRadius: 10,
                  color: '#a8d4f5',
                  cursor: 'pointer',
                  padding: '14px 28px',
                  fontSize: 15,
                  fontWeight: 500,
                  fontFamily: 'Inter, sans-serif',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => ((e.currentTarget.style.background = 'rgba(255,255,255,0.1)'))}
                onMouseLeave={e => ((e.currentTarget.style.background = 'rgba(255,255,255,0.06)'))}
              >
                About This Project
              </button>
            </div>
          </div>

          {/* Stats strip */}
          <div
            style={{
              position: 'absolute',
              bottom: -80,
              right: 24,
              display: 'flex',
              gap: 2,
              background: 'rgba(5,14,26,0.8)',
              border: '1px solid rgba(59,119,200,0.2)',
              borderRadius: 14,
              overflow: 'hidden',
              backdropFilter: 'blur(12px)',
            }}
          >
            {[
              { num: '6', label: 'Fish Families' },
              { num: '24+', label: 'Species Profiled' },
              { num: '100+', label: 'Photos' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: '16px 24px',
                  borderRight: i < 2 ? '1px solid rgba(59,119,200,0.15)' : 'none',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 26,
                    fontWeight: 700,
                    color: '#67d7ee',
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </div>
                <div style={{ fontSize: 11, color: '#6eaae0', marginTop: 4, textTransform: 'uppercase', letterSpacing: 1 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY GRID PREVIEW */}
      <section style={{ maxWidth: 1200, margin: '140px auto 0', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p style={{ fontSize: 12, color: '#0891b2', letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600, margin: '0 0 8px' }}>
              Species by Family
            </p>
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 700,
                color: '#e8f4fd',
                margin: 0,
              }}
            >
              Browse the Reef by Family
            </h2>
          </div>
          <button
            onClick={() => navigate({ id: 'gallery' })}
            style={{
              background: 'none',
              border: '1px solid rgba(59,119,200,0.4)',
              borderRadius: 8,
              color: '#6eaae0',
              cursor: 'pointer',
              padding: '10px 20px',
              fontSize: 13,
              fontFamily: 'Inter, sans-serif',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(59,119,200,0.8)'
              e.currentTarget.style.color = '#a8d4f5'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(59,119,200,0.4)'
              e.currentTarget.style.color = '#6eaae0'
            }}
          >
            View All Families →
          </button>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 20,
          }}
        >
          {fishFamilies.map(family => (
            <FamilyCard key={family.id} family={family} navigate={navigate} />
          ))}
        </div>
      </section>

      {/* BIO SECTION */}
      <section style={{ maxWidth: 1200, margin: '100px auto 0', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 60,
            alignItems: 'center',
            background: 'rgba(13,32,56,0.6)',
            border: '1px solid rgba(59,119,200,0.15)',
            borderRadius: 20,
            padding: 48,
          }}
        >
          {/* Photo */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 16,
                overflow: 'hidden',
                aspectRatio: '4/5',
                background: '#0d2038',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=700&h=875&fit=crop&auto=format"
                alt="School of fish underwater — representing reef diving"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Floating badge */}
            <div
              style={{
                position: 'absolute',
                bottom: -16,
                right: -16,
                background: 'linear-gradient(135deg, #0891b2, #6366f1)',
                borderRadius: 14,
                padding: '14px 18px',
                textAlign: 'center',
                boxShadow: '0 8px 32px rgba(8,145,178,0.35)',
              }}
            >
              <div style={{ fontSize: 22 }}>🤿</div>
              <div style={{ fontSize: 11, color: '#fff', fontWeight: 600, marginTop: 4, whiteSpace: 'nowrap' }}>
                Advanced Open Water
              </div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>
                + Enriched Air Certified
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p style={{ fontSize: 12, color: '#0891b2', letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600, margin: '0 0 12px' }}>
              About the Diver
            </p>
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(26px, 3vw, 38px)',
                fontWeight: 700,
                color: '#e8f4fd',
                margin: '0 0 20px',
                lineHeight: 1.2,
              }}
            >
              Passionate about the world beneath the surface
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: '#94b8d4',
                margin: '0 0 28px',
              }}
            >
              I'm a passionate diver dedicated to helping others explore and understand the underwater world. With certifications in Advanced Open Water and Enriched Air Diver, I enjoy studying marine life — especially fish families and their unique traits.
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: '#94b8d4',
                margin: '0 0 36px',
              }}
            >
              Through my personal projects, I aim to make fish identification clearer, accessible, and enjoyable for divers at any level.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button
                onClick={() => navigate({ id: 'about' })}
                style={{
                  background: 'rgba(8,145,178,0.15)',
                  border: '1px solid rgba(8,145,178,0.4)',
                  borderRadius: 8,
                  color: '#67d7ee',
                  cursor: 'pointer',
                  padding: '11px 22px',
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                  transition: 'background 0.2s',
                }}
              >
                About the Project →
              </button>
              <button
                onClick={() => navigate({ id: 'contact' })}
                style={{
                  background: 'none',
                  border: '1px solid rgba(168,212,245,0.2)',
                  borderRadius: 8,
                  color: '#94b8d4',
                  cursor: 'pointer',
                  padding: '11px 22px',
                  fontSize: 14,
                  fontFamily: 'Inter, sans-serif',
                  transition: 'all 0.2s',
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED FISH STRIP */}
      <section style={{ maxWidth: 1200, margin: '100px auto 0', padding: '0 24px' }}>
        <p style={{ fontSize: 12, color: '#6d28d9', letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600, margin: '0 0 8px' }}>
          Featured Species
        </p>
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(24px, 3vw, 36px)',
            fontWeight: 700,
            color: '#e8f4fd',
            margin: '0 0 32px',
          }}
        >
          Remarkable Reef Residents
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { img: '1595503240812-7286dafaddc1', name: 'Common Clownfish', family: 'damselfish', fishId: 'common-clownfish', tag: 'Pomacentridae' },
            { img: '1779548117227-2baf0f5f7fc1', name: 'Emperor Angelfish', family: 'angelfish', fishId: 'emperor-angelfish', tag: 'Pomacanthidae' },
            { img: '1657989571664-4e2b9d777bad', name: 'Rainbow Parrotfish', family: 'parrotfish', fishId: 'rainbow-parrotfish', tag: 'Scaridae' },
            { img: '1761375926995-c2afd0d56b00', name: 'Blue Tang', family: 'surgeonfish', fishId: 'blue-tang', tag: 'Acanthuridae' },
          ].map(fish => (
            <button
              key={fish.fishId}
              onClick={() => navigate({ id: 'fish', familyId: fish.family, fishId: fish.fishId })}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                borderRadius: 14,
                overflow: 'hidden',
                textAlign: 'left',
                transition: 'transform 0.25s',
                position: 'relative',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
            >
              <div style={{ background: '#0d2038', aspectRatio: '3/4', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={`https://images.unsplash.com/photo-${fish.img}?w=400&h=530&fit=crop&auto=format`}
                  alt={fish.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(5,14,26,0.9) 0%, transparent 50%)',
                  }}
                />
                <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14 }}>
                  <div style={{ fontSize: 10, color: '#67d7ee', letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, marginBottom: 4 }}>
                    {fish.tag}
                  </div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 15, fontWeight: 600, color: '#f0f9ff', lineHeight: 1.3 }}>
                    {fish.name}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ maxWidth: 1200, margin: '80px auto 0', padding: '0 24px 80px' }}>
        <div
          style={{
            borderRadius: 20,
            overflow: 'hidden',
            position: 'relative',
            padding: '64px 48px',
            background: 'linear-gradient(135deg, #071525 0%, #0d2038 100%)',
            border: '1px solid rgba(99,102,241,0.3)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '50%',
              height: '100%',
              background: 'linear-gradient(135deg, transparent, rgba(99,102,241,0.08))',
            }}
          />
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
            <div>
              <h2
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(24px, 3vw, 40px)',
                  fontWeight: 700,
                  color: '#e8f4fd',
                  margin: '0 0 12px',
                  maxWidth: 500,
                }}
              >
                Ready to identify your next dive encounter?
              </h2>
              <p style={{ fontSize: 16, color: '#6eaae0', margin: 0, maxWidth: 440 }}>
                Browse all six fish families, view expanded photo grids, and study detailed species profiles before your next dive.
              </p>
            </div>
            <button
              onClick={() => navigate({ id: 'gallery' })}
              style={{
                background: 'linear-gradient(135deg, #0891b2, #6366f1)',
                border: 'none',
                borderRadius: 12,
                color: '#fff',
                cursor: 'pointer',
                padding: '16px 32px',
                fontSize: 16,
                fontWeight: 700,
                fontFamily: 'Inter, sans-serif',
                whiteSpace: 'nowrap',
                boxShadow: '0 8px 32px rgba(99,102,241,0.3)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
            >
              Open Species Gallery →
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

function FamilyCard({ family, navigate }: { family: FishFamily; navigate: (p: Page) => void }) {
  return (
    <button
      onClick={() => navigate({ id: 'family', familyId: family.id })}
      style={{
        background: 'rgba(13,32,56,0.5)',
        border: '1px solid rgba(59,119,200,0.12)',
        borderRadius: 16,
        overflow: 'hidden',
        cursor: 'pointer',
        textAlign: 'left',
        padding: 0,
        transition: 'transform 0.25s, border-color 0.25s',
        position: 'relative',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.borderColor = family.color + '55'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.borderColor = 'rgba(59,119,200,0.12)'
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: 180, background: '#0a1828', overflow: 'hidden' }}>
        <img
          src={family.coverImage + '&w=700&h=400'}
          alt={`${family.name} fish`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,14,26,0.7) 0%, transparent 60%)' }} />
        {/* Color accent tag */}
        <div
          style={{
            position: 'absolute',
            top: 14,
            left: 14,
            background: family.color,
            borderRadius: 100,
            padding: '4px 12px',
            fontSize: 11,
            fontWeight: 700,
            color: family.textOnColor,
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}
        >
          {family.scientificFamily}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 14,
            right: 14,
            background: 'rgba(5,14,26,0.7)',
            borderRadius: 8,
            padding: '4px 10px',
            fontSize: 12,
            color: '#a8d4f5',
          }}
        >
          {family.species.length} species
        </div>
      </div>
      {/* Text */}
      <div style={{ padding: '20px 22px 24px' }}>
        <h3
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 22,
            fontWeight: 700,
            color: '#e8f4fd',
            margin: '0 0 8px',
          }}
        >
          {family.name}
        </h3>
        <p
          style={{
            fontSize: 13,
            color: '#6eaae0',
            lineHeight: 1.6,
            margin: '0 0 16px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {family.description}
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {family.identificationTips.slice(0, 2).map((tip, i) => (
            <span
              key={i}
              style={{
                background: `${family.color}18`,
                border: `1px solid ${family.color}35`,
                borderRadius: 6,
                padding: '3px 9px',
                fontSize: 11,
                color: family.color,
                fontWeight: 500,
              }}
            >
              {tip.split(',')[0].replace(/^[A-Z]/, c => c.toUpperCase())}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}

import { useState } from 'react'

type Page =
  | { id: 'home' }
  | { id: 'about' }
  | { id: 'contact' }
  | { id: 'gallery' }
  | { id: 'family'; familyId: string }
  | { id: 'fish'; familyId: string; fishId: string }

interface NavProps {
  currentPage: Page
  navigate: (page: Page) => void
}

export default function Nav({ currentPage, navigate }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { label: 'Home', page: { id: 'home' } as Page },
    { label: 'Fish Gallery', page: { id: 'gallery' } as Page },
    { label: 'About', page: { id: 'about' } as Page },
    { label: 'Contact', page: { id: 'contact' } as Page },
  ]

  const isActive = (page: Page) => {
    if (page.id === 'gallery' && (currentPage.id === 'gallery' || currentPage.id === 'family' || currentPage.id === 'fish')) return true
    return page.id === currentPage.id
  }

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(5, 14, 26, 0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(59, 119, 200, 0.2)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          {/* Logo */}
          <button
            onClick={() => navigate({ id: 'home' })}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #0891b2, #6366f1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
              }}
            >
              🐠
            </div>
            <div style={{ textAlign: 'left' }}>
              <div
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#e8f4fd',
                  lineHeight: 1.1,
                }}
              >
                Reef ID
              </div>
              <div style={{ fontSize: 10, color: '#6eaae0', letterSpacing: 2, textTransform: 'uppercase' }}>
                Fish Species Gallery
              </div>
            </div>
          </button>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: 4 }} className="hidden-mobile">
            {links.map(link => (
              <button
                key={link.label}
                onClick={() => navigate(link.page)}
                style={{
                  background: isActive(link.page)
                    ? 'rgba(59, 119, 200, 0.2)'
                    : 'none',
                  border: isActive(link.page)
                    ? '1px solid rgba(59, 119, 200, 0.5)'
                    : '1px solid transparent',
                  borderRadius: 8,
                  color: isActive(link.page) ? '#a8d4f5' : '#94b8d4',
                  cursor: 'pointer',
                  padding: '8px 16px',
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: 'Inter, sans-serif',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  if (!isActive(link.page)) {
                    (e.target as HTMLButtonElement).style.color = '#e8f4fd'
                    ;(e.target as HTMLButtonElement).style.background = 'rgba(255,255,255,0.06)'
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive(link.page)) {
                    (e.target as HTMLButtonElement).style.color = '#94b8d4'
                    ;(e.target as HTMLButtonElement).style.background = 'none'
                  }
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => navigate({ id: 'gallery' })}
            style={{
              background: 'linear-gradient(135deg, #0891b2, #6366f1)',
              border: 'none',
              borderRadius: 8,
              color: '#fff',
              cursor: 'pointer',
              padding: '9px 18px',
              fontSize: 13,
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              letterSpacing: 0.3,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => ((e.target as HTMLButtonElement).style.opacity = '0.85')}
            onMouseLeave={e => ((e.target as HTMLButtonElement).style.opacity = '1')}
          >
            Explore Species
          </button>
        </div>
      </div>
    </nav>
  )
}

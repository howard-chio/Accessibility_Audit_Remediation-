import { useState } from 'react'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import FamilyPage from './pages/FamilyPage'
import FishDetailPage from './pages/FishDetailPage'

export type Page =
  | { id: 'home' }
  | { id: 'about' }
  | { id: 'contact' }
  | { id: 'gallery' }
  | { id: 'family'; familyId: string }
  | { id: 'fish'; familyId: string; fishId: string }

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>({ id: 'home' })

  const navigate = (page: Page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ minHeight: '100vh', background: '#071525' }}>
      <Nav currentPage={currentPage} navigate={navigate} />
      {currentPage.id === 'home' && <HomePage navigate={navigate} />}
      {currentPage.id === 'about' && <AboutPage navigate={navigate} />}
      {currentPage.id === 'contact' && <ContactPage navigate={navigate} />}
      {currentPage.id === 'gallery' && <GalleryPage navigate={navigate} />}
      {currentPage.id === 'family' && (
        <FamilyPage familyId={currentPage.familyId} navigate={navigate} />
      )}
      {currentPage.id === 'fish' && (
        <FishDetailPage
          familyId={currentPage.familyId}
          fishId={currentPage.fishId}
          navigate={navigate}
        />
      )}
    </div>
  )
}

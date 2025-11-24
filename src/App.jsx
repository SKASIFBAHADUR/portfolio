import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import BackgroundEffects from './components/BackgroundEffects'
import './App.css'

// Lazy load pages for performance
const Home = React.lazy(() => import('./pages/Home'))
const AboutPage = React.lazy(() => import('./pages/AboutPage'))
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'))
const SkillsPage = React.lazy(() => import('./pages/SkillsPage'))
const ContactPage = React.lazy(() => import('./pages/ContactPage'))
const CollaboratePage = React.lazy(() => import('./pages/CollaboratePage'))
const CaseStudyPage = React.lazy(() => import('./pages/CaseStudyPage'))

// Loading fallback component
const PageLoader = () => (
  <div style={{
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#667eea'
  }}>
    Loading...
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <BackgroundEffects />
        <Header />
        <main id="main-content" className="app-main">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:projectId" element={<CaseStudyPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/collaborate" element={<CollaboratePage />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App


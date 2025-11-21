import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import BackgroundEffects from './components/BackgroundEffects'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import ContactPage from './pages/ContactPage'
import CollaboratePage from './pages/CollaboratePage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <BackgroundEffects />
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/collaborate" element={<CollaboratePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App


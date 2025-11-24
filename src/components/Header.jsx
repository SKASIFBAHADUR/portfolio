import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import './Header.css'

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo">
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shaik Bahadur
          </motion.span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="nav desktop-nav">
          <NavLink to="/" className="nav-link" end>
            {({ isActive }) => (
              <>
                Home
                {isActive && (
                  <motion.div
                    className="nav-underline"
                    layoutId="activeNav"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
          <NavLink to="/about" className="nav-link">
            {({ isActive }) => (
              <>
                About
                {isActive && (
                  <motion.div
                    className="nav-underline"
                    layoutId="activeNav"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
          <NavLink to="/projects" className="nav-link">
            {({ isActive }) => (
              <>
                Projects
                {isActive && (
                  <motion.div
                    className="nav-underline"
                    layoutId="activeNav"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
          <NavLink to="/skills" className="nav-link">
            {({ isActive }) => (
              <>
                Skills
                {isActive && (
                  <motion.div
                    className="nav-underline"
                    layoutId="activeNav"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            {({ isActive }) => (
              <>
                Contact
                {isActive && (
                  <motion.div
                    className="nav-underline"
                    layoutId="activeNav"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
          <NavLink to="/contact" className="nav-cta">
            Hire Me
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-nav-overlay"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="mobile-nav">
                <NavLink to="/" className="mobile-nav-link">Home</NavLink>
                <NavLink to="/about" className="mobile-nav-link">About</NavLink>
                <NavLink to="/projects" className="mobile-nav-link">Projects</NavLink>
                <NavLink to="/skills" className="mobile-nav-link">Skills</NavLink>
                <NavLink to="/contact" className="mobile-nav-link">Contact</NavLink>
                <NavLink to="/contact" className="mobile-nav-cta">Hire Me</NavLink>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header

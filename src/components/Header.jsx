import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Header.css'

const Header = () => {
  const location = useLocation()

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
        <nav className="nav">
          <NavLink to="/" className="nav-link" end>
            {({ isActive }) => (
              <>
                Home
                {isActive && (
                  <motion.div
                    className="nav-underline"
                    layoutId="activeNav"
                    initial={false}
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
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
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
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
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
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
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
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
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Code2, Database, Cloud, GitBranch } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const keywords = ['Java', 'Spring Boot', 'Microservices', 'System Design', 'Distributed Systems']
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeywordIndex((prev) => (prev + 1) % keywords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const techLogos = [
    { icon: Code2, label: 'Java' },
    { icon: Database, label: 'Spring Boot' },
    { icon: Cloud, label: 'Microservices' },
    { icon: GitBranch, label: 'System Design' },
  ]

  return (
    <section id="hero" className="hero">
      {/* Animated background elements */}
      <div className="hero-background" aria-hidden="true">
        <div className="floating-shapes">
          {[...Array(isMobile ? 3 : 6)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-shape"
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i) * 20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-content">
        {/* Personal Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-intro"
        >
          <Sparkles className="sparkle-icon" size={18} />
          <span>Hi, I'm Shaik — I build software I'd be proud to use.</span>
        </motion.div>

        {/* Main Title with SEO Keywords */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="title-line">Java Backend &</span>
          <span className="title-line">
            <span className="gradient-text">System Design</span> Engineer
          </span>
        </motion.h1>

        {/* Animated Keywords */}
        <motion.div
          className="hero-keywords"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="keywords-container">
            <span className="keywords-label">✨ Specializing in:</span>
            <motion.span
              key={currentKeywordIndex}
              className="keyword-highlight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {keywords[currentKeywordIndex]}
            </motion.span>
          </div>
        </motion.div>

        {/* Subtitle with SEO */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I am a <span className="highlight">Full Stack Developer</span> who builds <span className="highlight">high-performance, scalable systems</span>.
          <br />
          My mission is to solve complex backend challenges and deliver <span className="highlight">production-ready software</span> that drives business growth.
        </motion.p>

        {/* Tech Stack Visual */}
        <motion.div
          className="tech-stack-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          role="list"
          aria-label="Technical skills"
        >
          {techLogos.map((tech, index) => (
            <motion.div
              key={tech.label}
              className="tech-icon-wrapper"
              whileHover={{
                scale: 1.2,
                y: -5,
                transition: { duration: 0.2, delay: 0 }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1 + index * 0.1 }
              }}
              role="listitem"
            >
              <tech.icon className="tech-icon" size={24} aria-hidden="true" />
              <span className="tech-label">{tech.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Improved CTAs */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link to="/projects" className="hero-cta primary" aria-label="View my portfolio projects">
            <span>See My Work</span>
            <ArrowRight className="cta-icon" size={18} aria-hidden="true" />
          </Link>
          <Link to="/contact" className="hero-cta secondary" aria-label="Contact me for opportunities">
            <span>Open To Opportunities</span>
            <Sparkles className="cta-icon" size={18} aria-hidden="true" />
          </Link>
        </motion.div>

      </div>

      {/* Parallax effect based on mouse */}
      <motion.div
        className="parallax-layer"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        aria-hidden="true"
      />
    </section>
  )
}

export default Hero

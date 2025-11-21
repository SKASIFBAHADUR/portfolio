import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Rocket, Zap, Shield, TrendingUp, Calendar, Target } from 'lucide-react'
import './Section.css'
import './About.css'
const About = () => {
  const timeline = [
    {
      year: '2019',
      title: 'Started as Web Developer',
      description: 'Built my first full-stack applications and fell in love with backend architecture',
    },
    {
      year: '2021',
      title: 'Focused on Backend Systems',
      description: 'Deep dived into Java, Spring Boot, and designing scalable microservices',
    },
    {
      year: '2023',
      title: 'System Design & Architecture',
      description: 'Now designing distributed systems and breaking monoliths into scalable services',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="about">
      <div className="section-container">
        {/* Personal Intro Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-intro"
        >
          <Target className="intro-icon" size={18} />
          <span>My Journey from Web Dev to System Architect</span>
        </motion.div>

        {/* Main Title with Visual Hierarchy */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="section-kicker">About</span>
          <h2 className="section-title">
            I break complex problems into{' '}
            <span className="gradient-highlight">practical, scalable services</span> and ship{' '}
            <span className="gradient-highlight">reliable systems fast</span> — without compromising performance or security.
          </h2>
          <p className="section-subtitle">
            I started as a web developer, now I design distributed systems. I enjoy{' '}
            <span className="text-highlight">reverse engineering systems</span> &{' '}
            <span className="text-highlight">breaking monoliths into scalable services</span>.
          </p>
        </motion.div>

        {/* Profile Section with Photo Placeholder */}
        <motion.div
          className="about-profile"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="profile-image-wrapper">
            <div className="profile-image">
              <Code2 size={48} className="profile-icon" />
            </div>
            <div className="profile-glow" />
          </div>
          <div className="profile-info">
            <h3>Shaik Bahadur</h3>
            <p>Java Backend & System Design Engineer</p>
            <div className="profile-badges">
              <span className="badge">Backend Focused</span>
              <span className="badge">System Design</span>
              <span className="badge">Full Stack</span>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="about-timeline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="timeline-title">
            <Calendar className="timeline-title-icon" size={24} />
            Career Journey
          </h3>
          <div className="timeline-items">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              >
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content Cards */}
        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-card" variants={itemVariants}>
            <div className="card-header">
              <Rocket className="card-icon" size={24} />
              <h3>Engineering Focus</h3>
            </div>
            <p>
              I break complex problems into practical, scalable services and ship reliable systems fast — without compromising{' '}
              <span className="text-highlight">performance</span> or <span className="text-highlight">security</span>.
              Every system I build is designed with observability and maintainability from day one.
            </p>
          </motion.div>

          <motion.div className="about-card" variants={itemVariants}>
            <div className="card-header">
              <TrendingUp className="card-icon" size={24} />
              <h3>Currently Exploring</h3>
            </div>
            <ul>
              <li>
                <Zap className="list-icon" size={16} />
                Event-driven microservices and message brokers
              </li>
              <li>
                <Zap className="list-icon" size={16} />
                Container orchestration and automated deployments
              </li>
              <li>
                <Zap className="list-icon" size={16} />
                Distributed caching and real-time data pipelines
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

import React from 'react'
import { motion } from 'framer-motion'
import { User, Code2, Briefcase, Award, CheckCircle2, Zap } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './Section.css'
import './About.css'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const coreSkills = [
    'Java (Advanced)',
    'Spring Boot',
    'REST APIs, Microservices',
    'React, JavaScript, HTML5, CSS3, Tailwind',
    'MySQL, MongoDB',
    'Git, GitHub, GitHub Actions',
    'JWT authentication & Authorization',
    'Docker (basics), cloud deployments',
    'System Design (beginner → intermediate)',
    'Data Structures & Algorithms'
  ]

  const professionalSkills = [
    'Clean coding practices',
    'Scalable backend architecture',
    'Problem-solving & debugging',
    'API design & performance optimization',
    'Writing reusable, maintainable code',
    'Building real-world, production-grade features'
  ]

  const valueProps = [
    {
      icon: Code2,
      title: 'Full-Stack Ownership',
      description: 'I combine frontend creativity with backend power — end-to-end ownership of the product'
    },
    {
      icon: Zap,
      title: 'Built for Scale',
      description: 'I build for performance, scalability, and future growth — not just to make it work, but to make it last'
    },
    {
      icon: Award,
      title: 'Design + Engineering',
      description: 'I understand both design and engineering — UX, clarity, responsiveness, and speed'
    },
    {
      icon: CheckCircle2,
      title: 'Production-Ready Code',
      description: 'I write secure, optimized, and production-ready code following industry best practices'
    }
  ]

  return (
    <section id="about" className="about">
      <Helmet>
        <title>About Me | Full Stack Developer Bio | Shaik Bahadur</title>
        <meta name="description" content="I'm Shaik Bahadur, a passionate full stack developer with strong expertise in Java, Spring Boot, React, SQL, and backend engineering. My journey combines clean code, problem-solving, scalable architecture, and modern web developer portfolio design. Learn more about who I am, what I do, how I work, and the values that guide my development approach." />
        <meta name="keywords" content="full stack developer bio, about full stack developer, Java backend developer profile, modern web developer portfolio design, professional developer introduction, full stack developer India, Java Spring Boot developer, React developer profile" />
      </Helmet>
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-kicker">About Me</span>
          <h2 className="section-title">
            Building <span className="gradient-highlight">efficient, scalable, and high-performance</span> web applications designed to solve real-world problems
          </h2>
        </motion.div>

        {/* Who I Am */}
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="card-header">
            <User className="card-icon" size={24} />
            <h3>Who I Am</h3>
          </div>
          <p>
            I'm <span className="text-highlight">Shaik Bahadur</span>, a passionate <span className="text-highlight">Full Stack Developer from India</span> with strong expertise in Java, Spring Boot, React, SQL, and modern backend development.
            My journey is built on continuous learning, strong fundamentals, and a deep interest in systems that power modern digital products.
          </p>
        </motion.div>

        {/* What I Do */}
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="card-header">
            <Briefcase className="card-icon" size={24} />
            <h3>What I Do</h3>
          </div>
          <p>
            I design and develop <span className="text-highlight">complete end-to-end web solutions</span> — from clean, responsive frontends to powerful backend systems.
          </p>
          <ul style={{ marginTop: '1rem' }}>
            <li><CheckCircle2 size={16} className="list-icon" /> Full-stack web application development</li>
            <li><CheckCircle2 size={16} className="list-icon" /> Backend engineering using Spring Boot, Java, and microservices</li>
            <li><CheckCircle2 size={16} className="list-icon" /> REST API development and integration</li>
            <li><CheckCircle2 size={16} className="list-icon" /> Database design & optimization (MySQL, MongoDB)</li>
            <li><CheckCircle2 size={16} className="list-icon" /> Cloud-ready deployments and CI/CD workflows</li>
            <li><CheckCircle2 size={16} className="list-icon" /> UI development using React, Tailwind, JavaScript</li>
            <li><CheckCircle2 size={16} className="list-icon" /> Building scalable and secure systems following industry best practices</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            Whether it's a business website, portfolio, enterprise-style backend system, or API-driven service, I deliver <span className="text-highlight">fast, clean, and reliable solutions</span>.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="about-card" variants={itemVariants}>
            <div className="card-header">
              <Code2 className="card-icon" size={24} />
              <h3>Core Technical Skills</h3>
            </div>
            <ul>
              {coreSkills.map((skill, index) => (
                <li key={index}>
                  <Zap size={16} className="list-icon" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="about-card" variants={itemVariants}>
            <div className="card-header">
              <Briefcase className="card-icon" size={24} />
              <h3>Professional Skillset</h3>
            </div>
            <ul>
              {professionalSkills.map((skill, index) => (
                <li key={index}>
                  <CheckCircle2 size={16} className="list-icon" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="section-subtitle" style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '2rem', fontSize: '1.5rem' }}>
            Why Choose Me
          </h3>
        </motion.div>

        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {valueProps.map((prop, index) => (
            <motion.div key={index} className="about-card" variants={itemVariants}>
              <div className="card-header">
                <prop.icon className="card-icon" size={24} />
                <h3>{prop.title}</h3>
              </div>
              <p>{prop.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Statement */}
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ marginTop: '2rem' }}
        >
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            I <span className="text-highlight">continuously improve myself</span> — preparing for Google-level standards in system design, DSA, and backend engineering.
            I focus on <span className="text-highlight">solving problems, not just writing code</span>. Every project you see in my portfolio has clear thought, process, and purpose behind it.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1rem' }}>
            I deliver results: <span className="text-highlight">Clean UI → Fast backend → Smooth user experience → Stable deployments</span>.
          </p>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link to="/projects" className="text-highlight" style={{ textDecoration: 'underline', cursor: 'pointer', fontSize: '1.1rem' }}>
              See my work in action →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

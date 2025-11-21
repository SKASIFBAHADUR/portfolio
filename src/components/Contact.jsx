import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, Home, ArrowRight, Shield, Zap } from 'lucide-react'
import './Section.css'
import './Contact.css'

const offerings = [
  'Scalable backend architecture reviews',
  'Event-driven system design & Kafka pipelines',
  'Production-grade API platforms & governance',
  'Cloud deployments with CI/CD automation',
  'Fintech-grade security, auth & compliance',
]

const Contact = () => (
  <section id="contact" className="contact">
    <div className="contact-grid section-container">
      <motion.div
        className="contact-hero"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <div className="contact-intro">
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">
            Book me when you need <span className="gradient-highlight">distributed systems</span> that stay resilient under real-world traffic.
          </h2>
          <p className="section-subtitle">
            I consult with founders, VPs of Engineering, and platform teams to architect production-grade backends, unblock migrations, and ship secure APIs.
          </p>
        </div>

        <div className="contact-offerings">
          <h3>Here&apos;s what I can help with</h3>
          <ul>
            {offerings.map((item) => (
              <li key={item}>
                <Shield size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-availability">
          <h4>Availability & work style</h4>
          <p>Based in Hyderabad, India (IST) · Remote-first · Available for full-time, contract, or architecture consulting.</p>
          <p>Expect async comms, measurable milestones, and weekly architecture reviews.</p>
        </div>

        <div className="contact-actions">
          <a className="cta primary" href="mailto:shaikbahadur19@gmail.com?subject=System%20Call%20Booking">
            <Mail size={18} />
            Book a systems call
          </a>
          <a className="cta secondary" href="https://wa.me/917893718330" target="_blank" rel="noreferrer">
            <Phone size={18} />
            Chat on WhatsApp
          </a>
          <Link className="cta tertiary" to="/">
            <Home size={18} />
            Back to home
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="contact-panel"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="panel-header">
          <div className="panel-icon">
            <Zap size={20} />
          </div>
          <div>
            <h3>Proof & trust</h3>
            <p>Trusted by product teams shipping fintech, supply chain, and identity platforms.</p>
          </div>
        </div>

        <div className="panel-links">
          <a href="https://github.com/SKASIFBAHADUR" target="_blank" rel="noreferrer" className="panel-link">
            <Github size={18} />
            GitHub
            <ArrowRight size={16} />
          </a>
          <a href="https://www.linkedin.com/in/bahadur-sk-05701031b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="panel-link">
            <Linkedin size={18} />
            LinkedIn
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="panel-footer">
          <p>Need a quick architecture review?</p>
          <a className="cta primary" href="mailto:shaikbahadur19@gmail.com?subject=Architecture%20Review%20Request">
            <Shield size={18} />
            Request review
          </a>
        </div>
      </motion.div>
    </div>
  </section>
)

export default Contact


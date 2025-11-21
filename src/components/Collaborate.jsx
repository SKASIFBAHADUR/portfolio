import React from 'react'
import './Section.css'
import './Collaborate.css'

const Collaborate = () => (
  <section className="collaborate">
    <div className="section-container">
      <div className="collaborate-card">
        <span className="section-kicker">Let&apos;s Collaborate</span>
        <h2 className="section-title">Ready to ship a reliable backend or full-stack product?</h2>
        <p className="section-subtitle">
          Reach out directly—whether you need a resilient API, infrastructure guidance, or end-to-end product delivery.
        </p>
        <div className="collaborate-links">
          <a className="collaborate-link" href="mailto:shaikbahadur19@gmall.com">shaikbahadur19@gmall.com</a>
          <a className="collaborate-link" href="https://wa.me/917893718330" target="_blank" rel="noreferrer">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Collaborate



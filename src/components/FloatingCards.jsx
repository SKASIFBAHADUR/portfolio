import React from 'react'
import './FloatingCards.css'

const FloatingCards = () => {
  return (
    <div className="floating-cards">
      <div className="floating-card card-left">
        <div className="card-header">
          <span className="card-label">Signature Projects</span>
          <div className="card-icon">↗</div>
        </div>
        <div className="card-content">
          <h3 className="card-title">Immersive digital journeys delivered</h3>
          <div className="card-metric">
            <span className="metric-value">28</span>
            <div className="metric-bar">
              <div className="metric-bar-fill" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="floating-card card-right">
        <div className="card-header">
          <span className="card-label">Collaboration Score</span>
          <div className="card-icon">↗</div>
        </div>
        <div className="card-content">
          <div className="card-metric">
            <span className="metric-value">96%</span>
            <div className="metric-bar">
              <div className="metric-bar-fill" style={{ width: '96%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FloatingCards


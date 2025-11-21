import React from 'react'
import Abstract3DShape from './Abstract3DShape'
import './BackgroundEffects.css'

const BackgroundEffects = () => {
  // Generate random particles
  const particles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3,
  }))

  return (
    <div className="background-effects">
      <div className="particles-container">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="liquid-shape"></div>
      <Abstract3DShape />
    </div>
  )
}

export default BackgroundEffects


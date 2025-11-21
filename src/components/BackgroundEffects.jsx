import React, { useState, useEffect } from 'react'
import { lazy, Suspense } from 'react'
import './BackgroundEffects.css'

// Lazy load Abstract3DShape to improve initial load
const Abstract3DShape = lazy(() => import('./Abstract3DShape'))

const BackgroundEffects = () => {
  // Generate random particles - reduced for performance, even less on mobile
  const [particleCount, setParticleCount] = useState(20)
  
  useEffect(() => {
    const checkMobile = () => {
      setParticleCount(window.innerWidth <= 768 ? 10 : 20)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const particles = React.useMemo(() => 
    Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    })), [particleCount]
  )

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
      <Suspense fallback={null}>
        <Abstract3DShape />
      </Suspense>
    </div>
  )
}

export default BackgroundEffects


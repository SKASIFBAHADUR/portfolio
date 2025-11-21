import React from 'react'
import { lazy, Suspense } from 'react'
import './BackgroundEffects.css'

// Lazy load Abstract3DShape to improve initial load
const Abstract3DShape = lazy(() => import('./Abstract3DShape'))

const BackgroundEffects = () => {
  // Generate random particles - reduced from 100 to 30 for performance
  const particles = React.useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    })), []
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


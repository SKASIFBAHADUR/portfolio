import React from 'react'
import './Abstract3DShape.css'

const Abstract3DShape = () => {
  return (
    <div className="abstract-3d-container">
      <div className="abstract-3d-shape">
        <div className="shape-layer layer-1"></div>
        <div className="shape-layer layer-2"></div>
        <div className="shape-layer layer-3"></div>
        <div className="shape-layer layer-4"></div>
        <div className="shape-glow"></div>
      </div>
    </div>
  )
}

export default Abstract3DShape


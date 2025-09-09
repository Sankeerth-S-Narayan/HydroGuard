import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "pH Detection",
      description: "The hydrogel continuously monitors the wound's pH level using embedded sensors",
      icon: "🔍",
      detail: "Infected wounds present in alkaline pH"
    },
    {
      step: "02", 
      title: "Smart Analysis",
      description: "pH pattern analyzing to determine wound status and healing progress",
      icon: "🧠",
      detail: "Real-time assessment of infection risk and healing trajectory"
    },
    {
      step: "03",
      title: "Targeted Therapy",
      description: "Novel delivery system of synthetic compunds that prevent biofilm formation",
      icon: "⚛️",
      detail: "Antimicrobial agents for infection | Growth factors for healing | Anti-inflammatory for chronic wounds"
    },
  ]


  return (
    <section id="how-it-works" className="section" style={{ 
      background: 'transparent',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("/main-image.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.15,
        zIndex: 1
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-title">How HydroGuard Works</h2>
        <p className="section-subtitle">
          A revolutionary 3-step process that transforms chronic wound care
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {steps.map((step, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, #3498db, #2980b9)',
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                margin: '0 auto 1.5rem',
                boxShadow: '0 5px 20px rgba(52, 152, 219, 0.4)'
              }}>
                <div style={{ fontSize: '2rem' }}>{step.icon}</div>
                <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{step.step}</div>
              </div>
              
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#ecf0f1'
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#bdc3c7',
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                {step.description}
              </p>
              <div style={{
                background: 'rgba(52, 152, 219, 0.2)',
                padding: '1rem',
                borderRadius: '10px',
                fontSize: '0.9rem',
                color: '#ecf0f1',
                fontStyle: 'italic',
                border: '1px solid rgba(52, 152, 219, 0.3)'
              }}>
                {step.detail}
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  )
}

export default HowItWorks
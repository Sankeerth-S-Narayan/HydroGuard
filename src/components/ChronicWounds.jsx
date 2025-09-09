import React from 'react'

const ChronicWounds = () => {
  const woundTypes = [
    {
      title: "Diabetic Foot Ulcers",
      description: "Chronic wounds affecting 15% of diabetic patients, often leading to amputation",
      image: "/foot-ulcer.png",
      color: "#e74c3c"
    },
    {
      title: "Venous Insufficient Wounds",
      description: "Poor blood circulation causing delayed healing and tissue damage",
      image: "/arterial.png",
      color: "#3498db"
    },
    {
      title: "Infected Wounds",
      description: "Bacterial infections causing prolonged inflammation and delayed healing",
      image: "/infected-wounds.png",
      color: "#f39c12"
    }
  ]

  return (
    <section id="chronic-wounds" className="section" style={{ background: 'transparent' }}>
      <div className="container">
        <h2 className="section-title">Chronic Wounds We Treat</h2>
        <p className="section-subtitle">
          Our smart hydrogel dressing is specifically designed to address the most challenging chronic wounds
        </p>
        
        <div style={{ 
          marginBottom: '3rem',
          width: '100%',
          height: '400px',
          position: 'relative',
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
        }}>
          <img 
            src="/wound-care.png" 
            alt="Chronic Wound Care"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.8,
              filter: 'brightness(0.9) contrast(1.1)'
            }}
          />
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {woundTypes.map((wound, index) => (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: `2px solid ${wound.color}20`,
              borderRadius: '20px',
              padding: '2rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
              animation: `bounce 3s ease-in-out infinite ${index * 0.5}s`
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '15px',
                overflow: 'hidden',
                marginBottom: '1.5rem',
                boxShadow: `0 5px 15px ${wound.color}40`
              }}>
                <img 
                  src={wound.image} 
                  alt={wound.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>
              
              <div>
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem',
                  color: wound.color
                }}>
                  {wound.title}
                </h3>
                <p style={{ 
                  color: '#bdc3c7', 
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  {wound.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChronicWounds

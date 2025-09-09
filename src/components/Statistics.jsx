import React from 'react'

const Statistics = () => {
  const stats = [
    {
      number: "15%",
      label: "of diabetic patients develop chronic wounds",
      description: "Leading cause of non-traumatic lower limb amputations"
    },
    {
      number: "40%",
      label: "faster healing with pH-responsive hydrogel",
      description: "Compared to traditional wound dressings"
    },
    {
      number: "85%",
      label: "reduction in infection rates",
      description: "Through intelligent pH monitoring and therapeutic release"
    },
    {
      number: "6.5M",
      label: "people affected by chronic wounds annually",
      description: "In the United States alone"
    },
  ]

  return (
    <section className="section" style={{ 
      background: 'transparent',
      color: 'white'
    }}>
      <div className="container">
        <h2 className="section-title" style={{ color: 'white' }}>
          The Reason for Our Innovation
        </h2>
        <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          Clinical data and research supporting our revolutionary approach to chronic wound care
        </p>
        
        <div className="grid grid-3">
          {stats.map((stat, index) => (
            <div key={index} className="card" style={{ 
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textAlign: 'center',
              animation: `pulse 2s ease-in-out infinite ${index * 0.3}s`
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: '700',
                color: '#3498db',
                marginBottom: '1rem'
              }}>
                {stat.number}
              </div>
              <h3 style={{ 
                fontSize: '1.2rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                color: 'white'
              }}>
                {stat.label}
              </h3>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.9rem',
                lineHeight: '1.5'
              }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics

import React from 'react'

const Differentiators = () => {
  const advantages = [
    {
      title: "Faster Healing",
      metric: "40%",
      description: "Reduced healing time compared to traditional dressings",
      icon: "⚡",
      color: "#e74c3c"
    },
    {
      title: "Clinical Proven",
      metric: "95%",
      description: "Success rate in clinical trials with diabetic patients",
      icon: "🏆",
      color: "#f39c12"
    },
    {
      title: "Infection Prevention",
      metric: "85%",
      description: "Reduction in wound infection rates",
      icon: "🛡️",
      color: "#27ae60"
    },
    {
      title: "Cost Effective",
      metric: "60%",
      description: "Lower overall treatment costs per patient",
      icon: "💰",
      color: "#3498db"
    },
    {
      title: "Patient Comfort",
      metric: "90%",
      description: "Patient satisfaction and comfort rating",
      icon: "😊",
      color: "#9b59b6"
    },
    {
      title: "Real-time Monitoring",
      metric: "24/7",
      description: "Continuous wound status monitoring",
      icon: "📊",
      color: "#1abc9c"
    }
  ]

  const features = [
    {
      title: "Smart pH Sensing",
      description: "Advanced hydrogel technology that detects and responds to wound pH changes in real-time",
      benefit: "Enables precise therapeutic intervention"
    },
    {
      title: "Targeted Drug Delivery",
      description: "Intelligent release of antimicrobial agents and biofilm disruptors",
      benefit: "Maximizes treatment efficacy while minimizing side effects"
    },
    {
      title: "Non-Invasive Monitoring",
      description: "Continuous wound assessment without removing the dressing or causing patient discomfort",
      benefit: "Reduces infection risk and improves patient compliance"
    },
    {
      title: "Data-Driven Insights",
      description: "Comprehensive analytics and reporting for healthcare providers and patients",
      benefit: "Enables proactive care and better treatment outcomes"
    }
  ]

  return (
    <section className="section" style={{ background: 'transparent' }}>
      <div className="container">
        <h2 className="section-title">What Makes HydroGuard Different</h2>
        <p className="section-subtitle">
          Revolutionary technology that sets new standards in chronic wound care
        </p>
        
        <div style={{ marginBottom: '4rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{
                width: '100%',
                maxWidth: '280px',
                height: '280px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                border: '1px solid #ecf0f1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '1rem',
                margin: '0 auto',
                boxShadow: '0 10px 30px rgba(52, 152, 219, 0.4)'
              }}>
                <h4 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: '#3498db'
                }}>
                  {feature.title}
                </h4>
                <p style={{
                  color: '#bdc3c7',
                  lineHeight: '1.5',
                  fontSize: '0.9rem'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

export default Differentiators

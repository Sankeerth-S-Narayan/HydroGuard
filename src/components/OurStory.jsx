import React from 'react'

const OurStory = () => {
  return (
    <section id="story" className="section" style={{ background: 'transparent' }}>
      <div className="container">
        <h2 className="section-title">Our Story</h2>
        <p className="section-subtitle">
          Born from a vision to revolutionize chronic wound care for diabetic patients
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '3rem',
          alignItems: 'center',
          marginBottom: '4rem'
        }}>
          <div>
            <img 
              src="/poster.jpg" 
              alt="HydroGuard Research and Development"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
          
          <div>
            <h3 style={{ 
              fontSize: '2rem', 
              fontWeight: '600', 
              marginBottom: '1.5rem',
              color: '#ecf0f1'
            }}>
              A Mission-Driven Innovation
            </h3>
            
            <p style={{
              fontSize: '1.1rem',
              color: '#bdc3c7',
              marginBottom: '1.5rem',
              lineHeight: '1.7'
            }}>
              HydroGuard was founded by a team of biomedical engineers, clinicians, and researchers who witnessed firsthand the devastating impact of chronic wounds on diabetic patients. Our journey began with a simple question: "What if we could create a smart dressing that could sense, analyze, and respond to wound conditions in real-time?"
            </p>
            
            <p style={{
              fontSize: '1.1rem',
              color: '#bdc3c7',
              marginBottom: '1.5rem',
              lineHeight: '1.7'
            }}>
              After years of research and development, we've created the world's first pH-responsive hydrogel dressing that not only monitors wound conditions but also delivers targeted therapy based on real-time pH analysis.
            </p>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '1.5rem',
              borderRadius: '10px',
              borderLeft: '4px solid #3498db'
            }}>
              <p style={{
                fontSize: '1rem',
                color: '#ecf0f1',
                fontStyle: 'italic',
                margin: 0
              }}>
                "Our goal is to transform chronic wound care from reactive to proactive, giving patients and healthcare providers the tools they need for better outcomes."
              </p>
              <p style={{
                fontSize: '0.9rem',
                color: '#bdc3c7',
                marginTop: '0.5rem',
                margin: 0
              }}>
                - Smrithi Suresh, Founder & CEO
              </p>
            </div>
          </div>
        </div>


        <div style={{ 
          textAlign: 'center', 
          marginTop: '4rem',
          background: 'linear-gradient(135deg, #2c3e50, #34495e)',
          color: 'white',
          padding: '3rem',
          borderRadius: '20px'
        }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Join Our Journey
          </h3>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            Be part of the revolution in chronic wound care. Together, we can make a difference.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" style={{ textDecoration: 'none' }}>
              <button className="btn" style={{ background: '#3498db' }}>
                Partner With Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory

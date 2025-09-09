import React from 'react'

const Hero = () => {
  return (
    <section id="home" style={{
      paddingTop: '120px',
      paddingBottom: '120px',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #2c3e50, #34495e)',
      color: 'white',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("/hydroguard-product.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 50%',
        backgroundRepeat: 'no-repeat',
        opacity: 0.3,
        zIndex: 1
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            A Gentle Solution for Chronic Wounds
          </h1>
          
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '2rem',
            opacity: 0.9,
            lineHeight: '1.6'
          }}>
            Advanced hydrogel technology with pH sensing for faster healing of chronic wounds in diabetic patients
          </p>

        </div>
      </div>
    </section>
  )
}

export default Hero

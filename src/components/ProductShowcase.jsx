import React from 'react'

const ProductShowcase = () => {
  return (
    <section id="product" className="section" style={{ 
      background: 'transparent',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("/ph-image.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.15,
        zIndex: -1
      }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">Meet HydroGuard</h2>
        <p className="section-subtitle">
          The world's first smart wound dressing with pH-responsive hydrogel technology
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div>
            <img 
              src="/hydroguard-product-2.jpg" 
              alt="HydroGuard Product Detail"
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
              Advanced Hydrogel Technology
            </h3>
            
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '1rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px'
              }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: '#3498db', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  marginRight: '1rem'
                }}>
                  pH
                </div>
                <div>
                  <h4 style={{ margin: 0, color: '#ecf0f1' }}>pH Sensing</h4>
                  <p style={{ margin: 0, color: '#bdc3c7', fontSize: '0.9rem' }}>
                    Real-time monitoring of wound pH levels
                  </p>
                </div>
              </div>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '1rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px'
              }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: '#e74c3c', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  marginRight: '1rem'
                }}>
                  ⚛️
                </div>
                <div>
                  <h4 style={{ margin: 0, color: '#ecf0f1' }}>Smart Drug Delivery</h4>
                  <p style={{ margin: 0, color: '#bdc3c7', fontSize: '0.9rem' }}>
                    Targeted therapeutic release based on pH levels
                  </p>
                </div>
              </div>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '1rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px'
              }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: '#27ae60', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  marginRight: '1rem'
                }}>
                  📊
                </div>
                <div>
                  <h4 style={{ margin: 0, color: '#ecf0f1' }}>Data Analytics</h4>
                  <p style={{ margin: 0, color: '#bdc3c7', fontSize: '0.9rem' }}>
                    Continuous monitoring and progress tracking
                  </p>
                </div>
              </div>
            </div>
            
            <button className="btn">
              Learn More About Technology
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase

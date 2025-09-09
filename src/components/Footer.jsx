import React from 'react'

const Footer = () => {
  return (
    <footer style={{
      background: '#2c3e50',
      color: 'white',
      padding: '3rem 0 1rem',
      marginTop: '2rem'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '2fr 1fr 1fr', 
          gap: '3rem',
          marginBottom: '2rem',
          alignItems: 'start'
        }}>
          <div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              marginBottom: '1rem',
              color: '#3498db'
            }}>
              HydroGuard
            </h3>
            <p style={{ 
              color: '#bdc3c7', 
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              Revolutionizing chronic wound care through innovative smart hydrogel technology that improves patient outcomes and reduces healthcare costs.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: '#bdc3c7', fontSize: '1.5rem' }}>📘</a>
              <a href="#" style={{ color: '#bdc3c7', fontSize: '1.5rem' }}>🐦</a>
              <a href="#" style={{ color: '#bdc3c7', fontSize: '1.5rem' }}>💼</a>
              <a href="#" style={{ color: '#bdc3c7', fontSize: '1.5rem' }}>📧</a>
            </div>
          </div>
          
          <div>
            <h4 style={{ 
              fontSize: '1.2rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              color: 'white'
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#home" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Home</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#product" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Product</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#how-it-works" style={{ color: '#bdc3c7', textDecoration: 'none' }}>How It Works</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#story" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Our Story</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#contact" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ 
              fontSize: '1.2rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              color: 'white'
            }}>
              Contact Info
            </h4>
            <div style={{ color: '#bdc3c7', lineHeight: '1.8' }}>
              <p style={{ margin: '0 0 0.5rem 0' }}>
                📧 smrnish@gmail.com
              </p>
              <p style={{ margin: '0 0 0.5rem 0' }}>
                📞 (408) 623-4442
              </p>
            </div>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid #34495e', 
          paddingTop: '2rem',
          textAlign: 'center',
          color: '#bdc3c7'
        }}>
          <p style={{ margin: '0 0 1rem 0' }}>
            © 2024 HydroGuard. All rights reserved. | 
            <a href="#" style={{ color: '#3498db', textDecoration: 'none', margin: '0 0.5rem' }}>Privacy Policy</a> | 
            <a href="#" style={{ color: '#3498db', textDecoration: 'none', margin: '0 0.5rem' }}>Terms of Service</a>
          </p>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            HydroGuard is a registered trademark. This product is for investigational use only and is not yet approved for commercial sale.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

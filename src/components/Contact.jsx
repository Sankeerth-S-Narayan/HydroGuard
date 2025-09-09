import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will contact you soon.')
  }

  return (
    <section id="contact" className="section" style={{ background: 'transparent' }}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to revolutionize chronic wound care? Contact us to learn more about HydroGuard
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '3rem',
          alignItems: 'start'
        }}>
          <div>
            <h3 style={{ 
              fontSize: '1.8rem', 
              fontWeight: '600', 
              marginBottom: '2rem',
              color: '#ecf0f1'
            }}>
              Contact Information
            </h3>
            
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '1.5rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px'
              }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: '#3498db', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.2rem',
                  marginRight: '1rem'
                }}>
                  📧
                </div>
                <div>
                  <h4 style={{ margin: 0, color: '#ecf0f1', fontSize: '1.1rem' }}>Email</h4>
                  <p style={{ margin: 0, color: '#bdc3c7' }}>smrnish@gmail.com</p>
                </div>
              </div>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '1.5rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px'
              }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: '#e74c3c', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.2rem',
                  marginRight: '1rem'
                }}>
                  📞
                </div>
                <div>
                  <h4 style={{ margin: 0, color: '#ecf0f1', fontSize: '1.1rem' }}>Phone</h4>
                  <p style={{ margin: 0, color: '#bdc3c7' }}>(408) 623-4442</p>
                </div>
              </div>
              
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #3498db, #2980b9)',
              color: 'white',
              padding: '2rem',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
                Ready for Clinical Trials?
              </h4>
              <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
                Join our network of healthcare providers and be among the first to offer this revolutionary technology to your patients.
              </p>
              <button className="btn" style={{ background: 'white', color: '#3498db' }}>
                Request Trial Information
              </button>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '2rem',
              borderRadius: '15px'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: '1.5rem',
                color: '#ecf0f1'
              }}>
                Send Us a Message
              </h3>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '500',
                  color: '#ecf0f1'
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '500',
                  color: '#ecf0f1'
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '500',
                  color: '#ecf0f1'
                }}>
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '500',
                  color: '#ecf0f1'
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                  placeholder="Tell us about your interest in HydroGuard..."
                />
              </div>
              
              <button 
                type="submit" 
                className="btn"
                style={{ width: '100%', fontSize: '1.1rem', padding: '15px' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

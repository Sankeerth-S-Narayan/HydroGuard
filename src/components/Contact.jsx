import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = 'service_jwdbg68' // Replace with your EmailJS service ID
      const templateId = 'template_ackag3o' // Replace with your EmailJS template ID
      const publicKey = 'KoCnbJiyZAcDQAImt' // Replace with your EmailJS public key

      // Prepare template parameters to match your EmailJS template
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.organization || 'General Inquiry',
        message: formData.message,
        time: new Date().toLocaleString()
      }

      console.log('Sending with parameters:', templateParams)

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', organization: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      console.error('Error details:', {
        status: error.status,
        text: error.text,
        response: error.response
      })
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
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
                <div style={{ width: '100%', wordBreak: 'break-all' }}>
                  <h4 style={{ margin: 0, color: '#ecf0f1', fontSize: '1.1rem' }}>Email</h4>
                  <p style={{ 
                    margin: 0, 
                    color: '#bdc3c7',
                    wordBreak: 'break-all',
                    overflowWrap: 'break-word',
                    fontSize: '0.9rem'
                  }}>
                    📧 hydroguardwoundsolutions@gmail.com
                  </p>
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

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div style={{
                  background: 'rgba(46, 204, 113, 0.2)',
                  border: '1px solid #2ecc71',
                  color: '#2ecc71',
                  padding: '1rem',
                  borderRadius: '8px',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{
                  background: 'rgba(231, 76, 60, 0.2)',
                  border: '1px solid #e74c3c',
                  color: '#e74c3c',
                  padding: '1rem',
                  borderRadius: '8px',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  ❌ Sorry, there was an error sending your message. Please try again or contact us directly at hydroguardwoundsolutions@gmail.com
                </div>
              )}
              
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
                disabled={isSubmitting}
                style={{ 
                  width: '100%', 
                  fontSize: '1.1rem', 
                  padding: '15px',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home')
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        setIsScrolled(scrollTop > heroHeight - 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: isScrolled 
        ? 'rgba(44, 62, 80, 0.95)' 
        : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      zIndex: 1000,
      padding: '1rem 0',
      boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.3)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      transition: 'all 0.3s ease-in-out'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#ecf0f1',
            margin: 0
          }}>
            HydroGuard
          </h1>
        </div>
        
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="#home" style={{ textDecoration: 'none', color: '#ecf0f1', fontWeight: '500' }}>Home</a>
          <a href="#product" style={{ textDecoration: 'none', color: '#ecf0f1', fontWeight: '500' }}>Product</a>
          <a href="#how-it-works" style={{ textDecoration: 'none', color: '#ecf0f1', fontWeight: '500' }}>How It Works</a>
          <a href="#story" style={{ textDecoration: 'none', color: '#ecf0f1', fontWeight: '500' }}>Our Story</a>
          <a href="#contact" style={{ textDecoration: 'none', color: '#ecf0f1', fontWeight: '500' }}>Contact</a>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: isScrolled 
            ? 'rgba(44, 62, 80, 0.95)' 
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          boxShadow: isScrolled ? '0 5px 20px rgba(0, 0, 0, 0.3)' : 'none',
          padding: '1rem',
          transition: 'all 0.3s ease-in-out'
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href="#home" style={{ textDecoration: 'none', color: '#ecf0f1', fontWeight: '500' }}>Home</a>
            <a href="#product" style={{ textDecoration: 'none', color: '#ecf0f1', fontWeight: '500' }}>Product</a>
            <a href="#how-it-works" style={{ textDecoration: 'none', color: '#ecf0f1', fontWeight: '500' }}>How It Works</a>
            <a href="#story" style={{ textDecoration: 'none', color: '#ecf0f1', fontWeight: '500' }}>Our Story</a>
            <a href="#contact" style={{ textDecoration: 'none', color: '#ecf0f1', fontWeight: '500' }}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

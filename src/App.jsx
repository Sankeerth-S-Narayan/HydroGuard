import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ChronicWounds from './components/ChronicWounds'
import Statistics from './components/Statistics'
import ProductShowcase from './components/ProductShowcase'
import HowItWorks from './components/HowItWorks'
import Differentiators from './components/Differentiators'
import OurStory from './components/OurStory'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ChronicWounds />
      <Statistics />
      <ProductShowcase />
      <Differentiators />
      <HowItWorks />
      <OurStory />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

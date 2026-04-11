import React from 'react'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'

function App() {
  return (
    <div
      style={{
        background: 'var(--bg-primary)',
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      {/* Fixed gradient background */}
      <div className="gradient-bg" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  )
}

export default App

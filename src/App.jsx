import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ParallaxSection from './components/ParallaxSection'
import NeuralBackground from './components/NeuralBackground'

const App = () => {
  return (
    <>
      <NeuralBackground />
      <main className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <Hero />
        <ParallaxSection yOffset={60} className="-mt-8 z-10">
          <About />
        </ParallaxSection>
        <ParallaxSection yOffset={50} className="-mt-8 z-20">
          <Experience />
        </ParallaxSection>
        <ParallaxSection yOffset={50} className="-mt-8 z-30">
          <Skills />
        </ParallaxSection>
        <ParallaxSection yOffset={60} className="-mt-8 z-40">
          <Projects />
        </ParallaxSection>
        <ParallaxSection yOffset={40} className="-mt-8 z-50">
          <Contact />
        </ParallaxSection>
      </main>
    </>
  )
}

export default App

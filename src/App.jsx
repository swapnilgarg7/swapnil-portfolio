import React, { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

const App = () => {

  return (
    <main className="bg-black">
      <Navbar
      />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App

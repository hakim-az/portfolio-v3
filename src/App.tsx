import { useState, useEffect } from 'react'
// componeents
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'

const App = () => {
  const [sectionId, setSectionId] = useState('')

  // retreive section id
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: '#hero', element: document.getElementById('hero') },
        { id: '#about', element: document.getElementById('about') },
        { id: '#experience', element: document.getElementById('experience') },
        { id: '#portfolio', element: document.getElementById('portfolio') },
        { id: '#contact', element: document.getElementById('contact') },
      ]

      const scrollPosition = window.scrollY + window.innerHeight / 2
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element && scrollPosition >= section.element.offsetTop) {
          setSectionId(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Header sectionId={sectionId} />
      <HeroSection />
    </>
  )
}

export default App

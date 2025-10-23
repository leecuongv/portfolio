import './App.css'
import { LoadingScreen } from './components/sections/LoadingScreen'
import "./index.css"
import React, { useState, useEffect } from "react";
import { Navbar } from './components/Navbar.jsx'
import { MobileMenu } from './components/MobileMenu.jsx'
import { Home } from './components/sections/Home.jsx';
import { About } from './components/sections/About.jsx';
import { Projects } from './components/sections/Projects.jsx';
import Experience from './components/sections/Experience.jsx';
import { Contact } from './components/sections/Contract.jsx';
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) return 'light'
    } catch {
      /* ignore */
    }
    return 'dark'
  })

  useEffect(() => {
    // apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
      document.body.style.backgroundColor = '#0a0a0a'
      document.body.style.color = '#f3f4f6'
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
      document.body.style.backgroundColor = '#ffffff'
      document.body.style.color = '#0f172a'
    }
    try { localStorage.setItem('theme', theme) } catch { /* ignore */ }
  }, [theme])

  const toggleTheme = () => setTheme((t) => t === 'dark' ? 'light' : 'dark')
  return (

    <>
      {!isLoaded && (<LoadingScreen onComplete={() => setIsLoaded(true)} />)}{""}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} `}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} toggleTheme={toggleTheme} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} toggleTheme={toggleTheme} />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App

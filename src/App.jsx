import React, { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'


const App = () => {
  const [darkMode,setDarkMode] = useState(false)

  useEffect(() => {
    if(darkMode) {
      document.body.classList.add('dark')
      document.body.classList.remove('light')
    }else{
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
    
  },[darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className='app-container'>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Main />
      <Footer />
    </div>
  )
}

export default App

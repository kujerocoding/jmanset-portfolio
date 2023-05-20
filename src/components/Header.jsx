import React from 'react'
import NavBar from './NavBar'
import {MdDarkMode} from 'react-icons/md'

const Header = ({toggleDarkMode, darkMode}) => {
 
  return (
    <header className=''>
        <a href="/">
          <div className='logo-container'>
            <img src='../src/assets/image/logo.png' className='logo' ></img>
            <span className='logo-text'>Jerome Manset</span>
            </div>
        </a>
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
    </header>
  )
}

export default Header

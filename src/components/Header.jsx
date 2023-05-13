import React from 'react'
import NavBar from './NavBar'
import {MdDarkMode} from 'react-icons/md'

const Header = (props) => {
 
  return (
    <header className=''>
        <a href="/">
          <div className='logo-container'>
            <img src='../src/assets/image/logo.png' className='logo' ></img>
            <span className='logo-text'>Jerome Manset</span>
            </div>
        </a>
      <NavBar toggleDarkMode={props.toggleDarkMode} darkMode={props.darkMode}/>
    </header>
  )
}

export default Header

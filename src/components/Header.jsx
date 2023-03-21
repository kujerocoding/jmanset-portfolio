import React from 'react'
import NavBar from './NavBar'
import {MdDarkMode} from 'react-icons/md'

const Header = (props) => {
 
  return (
    <header>
      <a href="/"><img src='../src/assets/image/logo.png' ></img></a>
      
      <NavBar toggleDarkMode={props.toggleDarkMode}/>
    </header>
  )
}

export default Header

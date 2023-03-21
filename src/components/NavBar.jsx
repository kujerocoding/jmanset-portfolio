import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {MdEmail, MdDarkMode, MdLightMode} from 'react-icons/md'

const NavBar = (props) => {

  const mode = props.darkMode ? <MdDarkMode className='icons' onClick={props.toggleDarkMode}/> : <MdLightMode className='icons' onClick={props.toggleDarkMode}/>

  
  return (
    <nav>
      <ul className='nav-lists'>
        <li><a>{mode}</a></li>
        <li><a href="https://github.com/kujerocoding" target="_blank"><AiFillGithub className='icons' /></a></li>
        <li><a href=""><MdEmail className='icons'/></a></li>
        <li><a href="https://www.linkedin.com/in/jeromemanset22" target="_blank"><AiFillLinkedin className='icons'/></a></li>
      </ul>
    </nav>
  )
}

export default NavBar

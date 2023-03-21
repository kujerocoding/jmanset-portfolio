import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {MdEmail, MdDarkMode} from 'react-icons/md'

const NavBar = (props) => {
  
  return (
    <nav>
      <ul className='nav-lists'>
        <li><a><MdDarkMode className='icons' onClick={props.toggleDarkMode}/></a></li>
        <li><a href=""><AiFillGithub className='icons' /></a></li>
        <li><a href=""><MdEmail className='icons'/></a></li>
        <li><a href=""><AiFillLinkedin className='icons'/></a></li>
      </ul>
    </nav>
  )
}

export default NavBar

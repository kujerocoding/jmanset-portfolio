import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'

const NavBar = () => {
  return (
    <nav>
      <ul className='nav-lists'>
        <li><a href=""><AiFillGithub className='icons' /></a></li>
        <li><a href=""><MdEmail className='icons'/></a></li>
        <li><a href=""><AiFillLinkedin className='icons'/></a></li>
      </ul>
    </nav>
  )
}

export default NavBar

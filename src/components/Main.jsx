import React, { useState } from 'react'
import ProjectData from './ProjectData';
import Greetings from './Greetings';
import {BsCart4, BsTiktok} from 'react-icons/bs'
import {MdWeb} from 'react-icons/md'
import { motion, AnimatePresence} from 'framer-motion';
import Project from './Project';



const Main = () => {

    const [data, setData] = useState(ProjectData)
    const [showHello, setShowHello] = useState(true);

    const handleClick = (e) => {
      const { name } = e.target
        console.log(e.target.name)
        setShowHello(false)
        setData(prevData => {
            return prevData.map(item => item.name === name ? {...item, isOpen: true} : {...item, isOpen: false})
          }
        )
        //console.log(data)
    }
    //console.log('raw', data)
    const filteredData = data.filter(item => item.isOpen === true)
    //console.log('filtered data: ',filteredData)
    const {title, img, desc, liveURL, repoURL} = filteredData[0]
    //console.log(title,img,desc)

    const variants = {
      open: { opacity: 1, x: 0 },
      closed: { opacity: 0, x: "-100%" },
    }

  return (
    <main> 
      <div className='info-container' >
        {showHello ? <Greetings /> : <Project {...filteredData[0]}/> }
      </div>
      <div className='project-links-container'>
          <div className='project-links'>
            <h2 className='project-featured'>My Projects</h2>
              <ul className='project-lists'>
                  <li><button name="eliteBallers" className='btn from-left' onClick={handleClick}>
                    EliteBallers</button>
                  </li>
                  <li><button name="gamehub" className='btn from-left' onClick={handleClick}>GameHub</button></li>
                  <li><button name="animeclouds" className='btn from-left' onClick={handleClick}>AnimeClouds</button></li>
              </ul>
          </div>
      </div>
      
    </main>
  )
}

export default Main


//../src/assets/image/atv.jpg
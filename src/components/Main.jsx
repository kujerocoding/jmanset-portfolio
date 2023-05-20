import React, { useEffect, useState } from 'react'
import ProjectData from './ProjectData';
import Greetings from './Greetings';
import {BsCart4, BsTiktok} from 'react-icons/bs'
import {MdWeb} from 'react-icons/md'
import { motion, AnimatePresence} from 'framer-motion';
import Project from './Project';



const Main = () => {

    const [data, setData] = useState(ProjectData)
    const [showHello, setShowHello] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState('')

    const handleClick = (e) => {
      const { name } = e.target
        setSelectedProject(name)
        setShowHello(false)
        fuckers()
        setData(prevData => {
            return prevData.map(item => item.name === name ? {...item, isOpen: true} : {...item, isOpen: false})
          }
        )
    }

    const fuckers = () => {
      if(!showHello){
        setIsVisible(true)
      }
    }

    const filteredData = data.filter(item => item.isOpen === true)

    const variants = {
      open: { opacity: 1, x: 0 },
      closed: { opacity: 0, x: "-100%" },
    }

  return (
   
      <main className='b-black' key="fuck"> 
        <motion.div className='info-container b-blue'
        key='shit'
        initial="hidden"
        animate="show"
        exit="exit"
        >
          {showHello && <Greetings />}
          {isVisible && <Project {...filteredData[0]} key="modal"/>}
        </motion.div>

        <div className='project-links-container' key="balls">
            <div className='project-links'>
              <h2 className='project-featured'>My Projects</h2>
                <ul className='project-lists'>
                    <li>
                      <button name="eliteballers" 
                      className={`btn from-left ${selectedProject === 'eliteballers' ? 'shit' : ''}`} 
                      onClick={handleClick}>
                      EliteBallers
                      </button>
                    </li>
                    <li>
                      <button name="gamehub" 
                      className={`btn from-left ${selectedProject === 'gamehub' ? 'shit' : ''}`} 
                      onClick={handleClick}>
                        GameHub
                      </button>
                    </li>
                    <li>
                      <button name="animeclouds" 
                      className={`btn from-left ${selectedProject === 'animeclouds' ? 'shit' : ''}`} 
                      onClick={handleClick}>
                        AnimeClouds
                      </button>
                    </li>
                </ul>
            </div>
        </div>
        
      </main>
    
  )
}

export default Main


//../src/assets/image/atv.jpg
import { motion } from 'framer-motion'
import React from 'react'

const Project = ({title, img, desc, liveURL, repoURL}) => {

    const item = {
        hidden: { opacity: 0, x: 500, scale:0 },
        show: {
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            ease: 'easeOut',
            duration: 0.3,
          },
        },
        exit: {
          opacity: 0,
          x: -200,
          scale: 0,
          transition: {
            ease: "easeInOut",
            duration: 0.5,
          },
        },
      };

  return (
    <motion.div 
    className='project-details-container b-red'
    variants={item}
    >
        <div className='project-desc-container' >
            <h3 className='project-title'>{title}</h3>
            <p className='project-desc-text'>{desc}</p>
        </div>
        <div className='img-container'> 
            <img src={`../src/assets/image/${img}`} className="project-img"></img>
        </div>
        <div className='links--external'>
            <a href={liveURL} target='_blank'><button className='links-external-btn btn-shrink-border'>View website</button></a>
            <a href={repoURL} target='_blank'><button className='links-external-btn btn-shrink-border'>Source code</button></a>
        </div>
    </motion.div>
  )
}

export default Project

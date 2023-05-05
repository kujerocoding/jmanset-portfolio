import React, { useState } from 'react'
import ProjectData from './ProjectData';
import Greetings from './Greetings';
import {BsCart4, BsTiktok} from 'react-icons/bs'
import {MdWeb} from 'react-icons/md'



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

  return (
    <main className='b-red'>
         
    <div className='info-container b-blue'>
       
        {showHello && <Greetings />}
        
       { !showHello && <div className='project-details-container b-black'>
            
            <div className='img-container'> 
                
                <img src={`../src/assets/image/${img}`} className="project-img"></img>
            </div>
            <div className='project-desc-container'>
              <div>
                <h3 className='project-title'>{title}</h3>
                <p className='project-desc-text'>{desc}</p>
              </div>
                <div className='links--external'>
                <p className='project-link'><a href={liveURL} target='_blank'>View website</a></p>
                <p className='project-link'><a href={repoURL} target='_blank'>Source code</a></p>
              </div>
                
            </div>
            
        </div>}
    </div>
    <div className='project-links-container b-yellow'>
        <h2 className='project-featured'>Featured Projects</h2>
        <ul className='project-lists'>
            <li>
              <button name="eliteBallers" className='project-btn' onClick={handleClick}>
                <span><MdWeb /> |</span> Elite Ballers - Responsive Landing Page</button>
            </li>
            <li><button name="gamehub" className='project-btn' onClick={handleClick}><span><MdWeb /> |</span> GameHub - E-commerce Store</button></li>
            <li><button name="mouse" className='project-btn' onClick={handleClick}><span><BsTiktok /> |</span> Tiktok Clone</button></li>
        </ul>
    </div>
    </main>
  )
}

export default Main


//../src/assets/image/atv.jpg
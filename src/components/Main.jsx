import React, { useState } from 'react'
import ProjectData from './ProjectData';
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
    const {title, img, desc} = filteredData[0]
    //console.log(title,img,desc)

  return (
    <main>
         
    <div className='info-container'>
       
        {showHello && <div className='hello-container'>
            <h1 className='title-hello'>Hello!</h1>
            <p>
                Career shifter with a background in X (your previous field) and a passion for web development. Strong problem-solver with a keen eye for detail and a drive to stay current with the latest web development technologies. Proven ability to learn quickly and work well in a team.
            </p>
        </div>}
        
       { !showHello && <div className='info-project-container'>
            
            <div className='img-container'>
                <h3>{title}</h3>
                <img src={`../src/assets/image/${img}`}></img>
            </div>
            <div className='desc-container'>
                <p>{desc}</p>
                <ul>
                    <li><a href="">Live</a></li>
                    <li><a href="">Source Code</a></li>
                </ul>
            </div>
            
        </div>}
    </div>
    {/* <div className='spacer'></div> */}
    <div className='project-container'>
        <h2 className='project-title'>Projects</h2>
        <ul className='project-lists'>
            <li><button name="atv" className='project-btn' onClick={handleClick}><span><BsCart4 /> |</span> Gaming Peripherals Online Store</button></li>
            <li><button name="case" className='project-btn' onClick={handleClick}><span><MdWeb /> |</span> Tourist Destination Landing Page</button></li>
            <li><button name="mouse" className='project-btn' onClick={handleClick}><span><BsTiktok /> |</span> Tiktok Clone</button></li>
        </ul>
    </div>
    </main>
  )
}

export default Main


//../src/assets/image/atv.jpg
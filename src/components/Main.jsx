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
            My name is Jerome, and I am a self-taught front-end developer with a background in network engineering. I shifted my career to pursue my passion for web development, and I have been learning and building projects on my own. I am excited to continue growing my skills and contributing to the field.
            <br />
            In my free time, I enjoy watching NBA games and playing online games."
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
        <h2 className='project-title'>Featured Projects</h2>
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
import React, { useState } from 'react'
import ProjectDetails from './ProjectDetails'
import ProjectData from './ProjectData';


const Main = () => {

    const [data, setData] = useState(ProjectData)
    const [showHello, setShowHello] = useState(true);
    const [showProject, setShowProject] = useState(false);

    const handleClick = (e) => {
      const { name } = e.target
        console.log(e.target.name)
        setShowHello(false)
        setShowProject(true)
        setData(prevData => {
            return prevData.map(item => item.name === name ? {...item, isOpen: true} : {...item, isOpen: false})
          }
        )
        console.log(data)
    }

  return (
    <main>
    <div className='info-container'>
        {showHello && <div>
            <h1>Hello!</h1>
            <p>
                Career shifter with a background in X (your previous field) and a passion for web development. Strong problem-solver with a keen eye for detail and a drive to stay current with the latest web development technologies. Proven ability to learn quickly and work well in a team.
            </p>
        </div>}
        
       { showProject && <div className='info-project-container'>

            <div className='img-container'><img src=""></img></div>
            <div className='desc-container'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores voluptatem asperiores, eligendi labore nam sunt nulla nostrum atque? Quaerat praesentium iste commodi natus placeat enim incidunt laboriosam id quasi!</p>
                <ul>
                    <li><a href="">Live</a></li>
                    <li><a href="">Source Code</a></li>
                </ul>
            </div>
            
        </div>}
    </div>
    <div className='spacer'></div>
    <div className='project-container'>
        <h2 className='project-title'>Projects</h2>
        <ul className='project-lists'>
            <li><button name="atv" onClick={handleClick}>Project 1</button></li>
            <li><button name="case" onClick={handleClick}>Project 2</button></li>
            <li><button name="mouse" onClick={handleClick}>Project 3</button></li>
        </ul>
    </div>
    </main>
  )
}

export default Main


//../src/assets/image/atv.jpg
import React from 'react'
import ProjectData from './ProjectData'

const ProjectDetails = () => {

  return (
    <div>
      {ProjectData.map(project => (
        <>
        <h3>{project.title}</h3>
        <img src={`../src/assets/image/${project.img}`}></img>
        <p>{project.desc}</p>
        <ul>
            <li><a href={`${project.liveURL}`}>Live</a></li>
            <li><a href="">Source Code</a></li>
        </ul>
        </>
      ))}
    </div>
  )
}

export default ProjectDetails

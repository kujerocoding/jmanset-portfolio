import React from 'react'

const Project = ({title, img, desc, liveURL, repoURL}) => {
  return (
    <div className='project-details-container'>
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
        </div>
  )
}

export default Project

import React from 'react'

const Projects = () => {
  return (
    <div className='project-container b-red'>
        <h2 className='project-title'>Projects</h2>
      <ul className='project-lists'>
     {['proj1','proj2', 'proj3'].map(item => (
        <li>{item}</li>
     ))}
      </ul>
    </div>
  )
}

export default Projects

import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className='b-red'>
      <button>Resume</button>
      <p>© Copyright {year}. Made by <a href="/">Jerome Manset.</a></p>
    </footer>
  )
}

export default Footer

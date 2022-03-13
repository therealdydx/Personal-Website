import React from 'react'
import {BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://linkedin.com/in/dys-profile" className='social-size' target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/therealdydx" className='social-size' target="_blank" rel="noopener noreferrer"><BsGithub/></a>
        <a href="https://instagram.com/therealdydx" className='social-size' target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials
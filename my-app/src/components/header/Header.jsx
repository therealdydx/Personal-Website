import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5 className="text-light">Yo what's up, I'm</h5>
        <h1>DY (冬越)</h1>
        <h4 className="text-light">Though you can call me Felix as well :D</h4>
        <h5 className="text-light">Software Developer, Venture Investor, Writer and Thinker</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

      </div>
    </header>
  )
}

export default Header
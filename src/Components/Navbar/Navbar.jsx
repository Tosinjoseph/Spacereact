import './Navbar.css'
import logo from '../../assets/logo.svg'
import {Link, ScrollLink} from 'react-scroll'
import navi_icon from '../../assets/navi-icon.png'

import React, { useState } from 'react'

const Navbar = () => {
  const[navToggle, setNavToggle] = useState(false);
  const toggleNav =()=>{
    navToggle? setNavToggle(false) : setNavToggle(true);
  }
  return (
    <div className='navbar'>
        <div className="navlogo">
            <img src={logo} alt='' />
        </div>
        <ul className={navToggle? '' : 'nav-hide'}>
            <li><Link smooth={true} offset={20} duration={500} to='hero'>00 HOME</Link></li>
            <li><Link smooth={true} offset={-170} duration={500} to='destination'>01 DESTINATION</Link></li>
            <li><Link smooth={true} offset={-30} duration={500} to='crew'>02 CREW</Link></li>
            <li><Link smooth={true} offset={50} duration={500} to='technology'>03 TECHNOLOGY</Link></li>
        </ul>
        <img src={navi_icon} alt=''  className='navi-icon' onClick={toggleNav}/>
    </div>
  )
}

export default Navbar
import './Navbar.css'
import logo from '../../assets/logo.svg'



import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navlogo">
            <img src={logo} alt='' />
        </div>
        <ul>
            <li>00 HOME</li>
            <li>01 DESTINATION</li>
            <li>02 CREW</li>
            <li>03 TECHNOLOGY</li>
        </ul>
    </div>
  )
}

export default Navbar
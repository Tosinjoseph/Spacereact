import './Hero.css'
import React, { useState } from 'react'
import background_home from '../../assets/background-home-desktop.jpg'



const Hero = ({loginShow, setLoginShow}) => {
  
  return (
    <div className='hero container'>
     <div className="lefthero">
     <h3>SO, YOU WANT TO TRAVEL TO</h3>
     <h1>SPACE</h1>
     <p>There are many variations of passages of Lorem available,<br></br>the majority have suffered alteration in some form,<br></br> by injected humour, or randomised words which don't  even<br></br> slightly believable.</p>
     </div>
     <div onClick={()=>setLoginShow(true)} className="righthero">EXPLORE</div>
    </div>
  )
}

export default Hero
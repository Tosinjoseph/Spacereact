import React from 'react'
import './Technology.css'
import background_technology from '../../assets/background-technology-desktop.jpg'


const Technology = ({techData, techDataChange,setTechDataChange}) => {
  return (
    <div className='technology'>
    <h3>03 SPACE LAUNCH</h3>
    <div className="list-info-img container">
        <ul>
            <li onClick={()=>setTechDataChange(0)} className='list-dot'>1</li>
            <li onClick={()=>setTechDataChange(1)} className='list-dot'>2</li>
            <li onClick={()=>setTechDataChange(2)} className='list-dot'>3</li>
        </ul>
        <div className="tech-info">
            <h2>THE TECHNOLOGY</h2>
            <h1>{techData.post1}</h1>
            <p>{techData.description2}</p>
       </div>
       <div className="tech-img">
        <img src={techData.image3} alt=''/>
       </div>
    </div>
    </div>
  )
}

export default Technology
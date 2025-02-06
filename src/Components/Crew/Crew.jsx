import './Crew.css'
import React from 'react'

import background_crew from '../../assets/background-crew-desktop.jpg'

const Crew = ({crewData,crewDataChange,setCrewDataChange}) => {
  return (
    <div className='crew'>
     <h3>02 MEET YOUR CREW</h3>
     <div className="info-img container">
        <div className="info">
            <h2>{crewData.post1}</h2>
            <h1>{crewData.name3}</h1>
            <p>{crewData.description2}</p>
            <ul>
                <li onClick={()=>setCrewDataChange(0)} className={crewDataChange===0 ? 'red-dot info-dot' : 'info-dot'}></li>
                <li onClick={()=>setCrewDataChange(1)} className={crewDataChange===1 ? 'red-dot info-dot' : 'info-dot'}></li>
                <li onClick={()=>setCrewDataChange(2)} className={crewDataChange===2 ? 'red-dot info-dot' : 'info-dot'}></li>
                <li onClick={()=>setCrewDataChange(3)} className={crewDataChange===3 ? 'red-dot info-dot' :  'info-dot'}></li>
            </ul>
        </div>
        <div className="img">
            <img src={crewData.image4} alt=''/>
        </div>
     </div>
    </div>
  )
}

export default Crew
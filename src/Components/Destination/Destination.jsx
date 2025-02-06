import React from 'react'
import './Destination.css'
import moon from '../../assets/image-moon.png'
import background_destination from '../../assets/background-destination-desktop.jpg'



const Destination = ({data, dataChange,setDataChange}) => {
  return (
    <div className='destination'>
        <h3 className='head'>01 PICK YOUR DESTINATION</h3>
        <div className='image-info container'>
            <img src={moon} alt=''/>
            <div className='info'>
                <ul >
                    <li onClick={()=>setDataChange(0)}>MOON</li>
                    <li onClick={()=>setDataChange(1)}>MARS</li>
                    <li onClick={()=>setDataChange(2)}>EUROPA</li>
                    <li onClick={()=>setDataChange(3)}>TITANS</li>
                </ul>
                <div className='h1-p'>
                    <h1>{data.name1}</h1>
                    <p>{data.description2}</p>
                    <div className="underline"></div>
                </div>
                    
                <div className="below-underline">
                    <p>AVG. DISTANCE <br></br>225 MIL. KM</p>
                    <p>EST. TRAVEL TIME <br></br>      9 MONTHS</p>
                </div>
            </div>

        </div>
            
            
    </div>
  )
}

export default Destination
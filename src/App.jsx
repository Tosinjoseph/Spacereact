
import { useState } from 'react'
import './App.css'
import Destination from './Components/Destination/Destination.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'

let data = [
  { name1: "MOON", description2: "The Moon is Earth's only natural satellite." },
  { name1: "MARS", description2: "Mars is the fourth planet from the Sun." },
  { name1: "EUROPA", description2: "Europa is one of Jupiter's moons and may have an ocean under its icy surface." },
  { name1: "TITANS", description2: "Titan is the largest moon of Saturn and has a dense atmosphere." }
]


function App() {
const[dataChange, setDataChange] = useState(0)
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Destination data={data[dataChange]} setDataChange={setDataChange} dataChange={dataChange}/>
      <div className='container'>
  
      </div>
    </div>
  )
}

export default App

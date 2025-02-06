
import { useState } from 'react'
import './App.css'
import Destination from './Components/Destination/Destination.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Crew from './Components/Crew/Crew.jsx'
import anousheh from './assets/image-anousheh-ansari.png'
import glover from './assets/image-victor-glover.png'
import douglas from './assets/image-douglas-hurley.png'
import mark from './assets/image-mark-shuttleworth.png'
import Technology from './Components/Technology/Technology.jsx'
import launch_vehicle from './assets/image-launch-vehicle-portrait.jpg'
import space_capsule from './assets/image-space-capsule-portrait.jpg'
import space_port from './assets/image-spaceport-portrait.jpg'
import LoginSignup from './Components/LoginSignup/LoginSignup.jsx'

let data = [
  { name1: "MOON", description2: "The Moon is Earth's only natural satellite." },
  { name1: "MARS", description2: "Mars is the fourth planet from the Sun." },
  { name1: "EUROPA", description2: "Europa is one of Jupiter's moons and may have an ocean under its icy surface." },
  { name1: "TITANS", description2: "Titan is the largest moon of Saturn and has a dense atmosphere." }
]

let crewData = [
  {image4: anousheh, post1: "FLIGHT ENGINEER",  description2: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia" ,name3: "ANOUSHEH ANSARI" },
  {image4: glover,  post1: "ASTRONAUT", description2: "and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections", name3: "VICTOR GLOVER" },
  {image4: douglas, post1: "SPACE EXPLORER", description2: "Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through", name3: "DOUGLAS HURLEY"},
  {image4: mark
, post1: "NASA PRESIDENT", description2: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.", name3: "MARK SHUTTLEWORTH" }
]


let techData = [
  {image3: launch_vehicle, post1: "LAUNCH VEHICLE",  description2: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"},
  {image3: space_capsule ,  post1: "SPACEPORT", description2: "and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections"},
  {image3: space_port, post1: "SPACECAPSULE", description2: "Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through"},
]


function App() {
const[dataChange, setDataChange] = useState(0)
const[crewDataChange, setCrewDataChange] = useState(0)
const[techDataChange, setTechDataChange] = useState(0)
const[loginShow, setLoginShow] = useState(false)
  return (
    <div>
      <Navbar/>
      <Hero loginShow={loginShow} setLoginShow={setLoginShow}/>
      <Destination data={data[dataChange]} setDataChange={setDataChange} dataChange={dataChange}/>
      <Crew  crewData={crewData[crewDataChange]} crewDataChange={crewDataChange} setCrewDataChange={setCrewDataChange}/>
      <Technology techData={techData[techDataChange]} techDataChange={techDataChange} setTechDataChange={setTechDataChange}/>
      <LoginSignup loginShow={loginShow} setLoginShow={setLoginShow}/>
    </div>
  )
}

export default App

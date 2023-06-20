import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeaterCells from './WeaterCells'
// 444ff1ac9d32f9b2fabdcc913af5d1b5

function App() {
  
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState([]);

  return (
    <>
     <h1>App</h1>
     <WeaterCells location={location} weather={weather}></WeaterCells>
    </>
  )
}

export default App

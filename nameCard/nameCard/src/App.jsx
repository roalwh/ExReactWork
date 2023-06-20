import { React, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TodayTime from './Components/TodayTime'
import FamousSay from './Components/FamousSay'

function App() {

  return (
    <div id='App'>
      <div className='famousBox'>
        <FamousSay></FamousSay>
      </div>
      <div className="Todaybox">
        <TodayTime></TodayTime>
      </div>
      <button>더보기</button>
    </div>
  )
}

export default App

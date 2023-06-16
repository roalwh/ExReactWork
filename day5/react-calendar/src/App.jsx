import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Calendar from './components/Calendar'

function App() {


  return (
    <div className="app">
      <Header></Header>
      <Calendar></Calendar>
    </div>
  )
}

export default App

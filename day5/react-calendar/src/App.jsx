import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Calendar from './components/Calendar'

function App() {
const [year,setyear] = useState(new Date().getFullYear());
const [month,setmonth] = useState(new Date().getMonth());
const [date,setdate] = useState(new Date().getDate());
console.log(year,month,date )



  return (
    <div className="app">
      <Header></Header>
      <Calendar year={year} month={month} date={date}></Calendar>
    </div>
  )
}

export default App

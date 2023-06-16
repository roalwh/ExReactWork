import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Calendar from './components/Calendar'

function App() {
  const d = new Date();
  const [year, setyear] = useState(d.getFullYear());
  const [month, setmonth] = useState(d.getMonth());
  const [date, setdate] = useState(d.getDate());
  const today = `${d.getFullYear()}${d.getMonth()}${d.getDate()}`;
  console.log(today);

  const nextMonth =()=>{
    if(month<11){
      return setmonth(month+1);
    }else{
      return setmonth(0) & setyear(year+1); 
    }
    
  }
  const prevMonth =()=>{
    if(month>0){
      return setmonth(month-1);
    }else{
      return setmonth(11) & setyear(year-1); 
    }
  }

  return (
    <div className="app">
      <Header></Header>
      <Calendar year={year} month={month} date={date} today={today}></Calendar>
      <div className="btn-group">
        <button className="prev" onClick={prevMonth}>이전</button>
        <button className="next" onClick={nextMonth}>다음</button>
      </div>
    </div>
  )
}

export default App

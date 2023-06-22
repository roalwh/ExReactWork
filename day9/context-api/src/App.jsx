import { useState, useContext } from 'react'
import './App.css'

import Page from './components/Page';
import { Context } from './components/context';

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const handleDarkmode = () => {
    setDarkmode(!darkmode);
    console.log(darkmode)
  }

  return (
    // Conext로 하위 컴포넌트에게 state값을 제공
    <Context.Provider value={{ darkmode, setDarkmode, handleDarkmode }}>
      <Page />
    </Context.Provider>
  )
}

export default App

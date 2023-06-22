import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// 연결할 페이지
import Home from './components/Home'
import About from './components/About'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

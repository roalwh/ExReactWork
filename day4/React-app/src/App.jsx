import { useState } from 'react'
import './App.css'

function App() {
  const [Tab, setTab] = new useState(0);

  return (
    <>
      <h1>App</h1>
      <div className='tab-ui'>
        <div className='tab-group'>
          <a href="#tab1" style={Tab===0 ? {color:'red'}:null} onClick={()=>{setTab(0)}}>HTML</a>
          <a href="#tab1" style={Tab===1 ? {color:'red'}:null} onClick={()=>{setTab(1)}}>CSS</a>
          <a href="#tab1" style={Tab===2 ? {color:'red'}:null} onClick={()=>{setTab(2)}}>JavaScript</a>
        </div>
        <div className='tab-contents'>
          {
            Tab === 0 ?
              <article id='tab1'>
                <h1>HTML</h1>
                <p>Hyper Text Markup Language</p>
              </article>
              : null
          }
          {
            Tab === 1 ?
              <article id='tab2'>
                <h1>CSS</h1>
                <p>Cascading Style Sheet</p>
              </article>
              : null
          }
          {
            Tab === 2 ?
              <article id='tab3'>
                <h1>JavaScript</h1>
                <p>Web Programing Language</p>
              </article>
              : null
          }
        </div>
      </div>
    </>
  )
}

export default App

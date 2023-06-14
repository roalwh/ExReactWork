import React from 'react'
import './App.css'
import Pokemons from './components/Pokemons'
function App() {

  return (
    <>
      <section className='title-bg'>
        <h1>App</h1>
        <img src="logo" alt="logo" />
        <Pokemons/>
      </section>
    </>
  )

}


export default App
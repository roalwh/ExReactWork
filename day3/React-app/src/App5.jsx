import {React,useState} from 'react'
import './App.css'


function App5() {
  const [count,setcount] = useState(0);
  const addcount=()=>{
    setcount(count+1);
  }
  const delcount=()=>{
    setcount(count-1);
  }

  return (
    <>
    <h1>Count App</h1>
      <p>{count}</p>
      <button onClick={addcount}>상!승!</button>
      <button onClick={delcount}>떡!락!</button>
    </>
  )

}


export default App5
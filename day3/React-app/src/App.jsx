import {React,useState} from 'react'
import './App.css'




function App() {
  const [open,setmodel] = useState(false);
    console.log(open);
   const Model=()=>{
    return(
      <div className='modal'>
      <h2>모달창</h2>
      <p>알려줄내용들</p>
      <button className='btn' onClick={()=>{setmodel(false)}}> 닫기</button>
      </div>
      )}


  return (
    <div>
    {open ? (<Model></Model>) : null}
    <button className='btn' onClick={()=>{setmodel(true)}}>모달 오픈</button>
    </div>
    )

}


export default App
import { useState,useEffect } from 'react'
import './App.css'

// function App() {

//   console.log("aap시작")
//   const [count, setCount] = useState(0);
//   const addcount=()=>{
//     setCount(count+1);
//   }
//   // 문법 useEffect(함수,[상태변수])
//   useEffect(()=>{
//     // 앱이 시작되면 실행
//     // count 변수가 업데이트 되면 실행
//     console.log('useEffect,update');
//   },[count])

//   return (
//     <>
//       <h1>App</h1>
//       <p>{count}</p>
//       <button onClick={addcount}>업</button>
//     </>
//   )
// }


function App() {
  const [color,setColor] = new useState("#ccc");
  

  return(
    <>
      <h1>App App</h1>
      <div className='box' style={{backgroundColor:color}} ></div>
      <button className='btn' onClick={()=>{setColor('red')}}>red</button>
      <button className='btn' onClick={()=>{setColor('blue')}}>blue</button>
      <button className='btn' onClick={()=>{setColor('green')}}>green</button>
    </>
  );
}

export default App

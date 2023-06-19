import { useState,useRef,useEffect} from 'react'

import './App.css'

function App2() {
  const useR=useRef();
  console.log(useR.current);
  /*
    useEffct
    1.마운트(앱시작)
    2.업데이트(state변경)
    3.언마운트
  */
  useEffect(()=>{
    console.log("마운트 : ",useR.current);
    // 검색창에 자동 포커스//앱시작시 시작점
    useR.current.focus();
  },[]);
  return (
    <>
      <h2>useRef</h2>
      <input ref={useR} type='text'></input>
    </>
  )
}

export default App2



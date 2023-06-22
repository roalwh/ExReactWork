
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

import Detail from './Pages/Detail'
import Home from './Pages/Home'
import Navibar from './conpenets/Navibar';

function App() {

  const API_KEY="0BzgkMoCd8wrWBuM1%2B7I89%2FMPodliDlLnWlzqiVPN583IYePRyIm%2BRoiMu%2BWxFTgxRWZrzXgtmFWWMxTvW%2F7oA%3D%3D"
  const year = new Date().getFullYear();
  const fineUrl=`http://apis.data.go.kr/B552584/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo?year=${year}&pageNo=1&numOfRows=100&returnType=json&serviceKey=${API_KEY}`

  const [data,setDate] = useState('');

  const fetchfine = () => {
    // if (location === '') {
    //     alert("값이없습니다.");
    //     return;
    // }
    fetch(fineUrl)
      .then(res => res.json())
      .then(data => {
        setDate(data.response.body);
        console.log(data);
      })
  };
  useEffect(() => {
    fetchfine();
  }, [])



  const logs=()=>{
    return(
      console.log(data)
    )
  }
  return (
    <BrowserRouter>
    <button onClick={logs}>로그</button>
      <Navibar>
      </Navibar>
      <hr></hr>
      <Routes>
        <Route path="/" element={<Home data={data}/>}></Route>
        <Route path="/detail" element={<Detail/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

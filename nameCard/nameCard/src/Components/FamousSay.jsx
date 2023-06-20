import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function FamousSay() {
    const [data, setData] = useState('')


  const fetchData = () =>{
    axios.get("https://api.qwer.pw/request/helpful_text?apikey=guest")
    .then(data =>{
      console.log(data.data[1].respond);
      setData(data.data[1].respond);
    }).catch(err => {
      console.log(err + ' 서버요청 에러')
		})
  }
  useEffect(()=>{
    fetchData();
    let settimeIn=setInterval(()=>{
        fetchData();
    },100000)
    return () => clearInterval(settimeIn); 
  },[])

  return (
    <>
    <p>{data}</p>
    </>
  )
}
export default FamousSay;

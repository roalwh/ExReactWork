import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState('')

  const fetchData = () =>{
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then(data =>{
      console.log(data);
      setData(data.data);
    }).catch(err => {
      console.log(err + ' 서버요청 에러')
		})
  }
  return (
    <>
     <h1>App</h1>
     <button onClick={fetchData}>API!</button>
     <ul>
        {
          data ? data.map((post, i) => {
            return (
              <ul key={post.id}>{post.id}. {post.title}
                <li><img src={post.thumbnailUrl}></img></li>
              </ul>
            )
          }) : "???"
        }
      </ul>
    </>
  )
}

export default App

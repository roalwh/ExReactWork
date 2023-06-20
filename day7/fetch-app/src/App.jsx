import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState('');

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setData(json);
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
                <li><pre>{post.body}</pre></li>
              </ul>
            )
          }) : "???"
        }
      </ul>
    </>
  )
}

export default App

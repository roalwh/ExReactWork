import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const posts = [
    '1글', '2글', '3글'
  ]
  const [likes, setLikes] = useState([0, 0, 0])
  console.log(likes);

  const btnLike = (i) =>{
    let copy=[...likes];
    copy[i]+=1;
    setLikes(copy);
  }
  
  return (
    <>
      {
        posts.map((post, i) => {
          return (
            <p key={i}>{post}</p>
          )
        })
      }
      {
        likes.map((like, i) => {
          return (
            <div key={i}>
              <button onClick={()=>btnLike(i)}>123</button>
              <span>{likes[i]} </span>
            </div>
          )
        })
      }
    </>
  );
}

export default App

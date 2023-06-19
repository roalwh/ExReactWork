import { useState } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState('');//문자
  const [texts, setTexts] = useState([]);

  // 글자저장
  const testsadd = () => {
    let copy = [...texts, text];
    setTexts(copy);
    setText('');
  }

  return (
    <>
      <h1>Day 6 App</h1>
      <h2>입력받아 출력하기</h2>

      <p><input type="text" value={text} onChange={(e) => {
        setText(e.target.value);
      }} /></p>
      <p><button onClick={testsadd}>저장</button></p>
      <p>{text}</p>

      {/* 저장출력 */}
      <ul style={{listStyleType:'none'}}>
        {
          texts.map((text, i) => {
            return (
              <li key={i}>{text}</li>
            )
          })
        }
      </ul>

    </>
  )
}

export default App


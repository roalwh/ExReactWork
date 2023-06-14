import React from 'react'
import './App.css'
import ColorButton from './components/ColorButton'
import Foods from './components/Foods';

function App4() {

  return (
    <>
    <h1>Appp!!</h1>
    <ColorButton setcolor="red" backcolor="#000">장바구니</ColorButton>
    <ColorButton setcolor="blue" backcolor="#fff">구매하기</ColorButton>
    <ColorButton setcolor="green" backcolor="#ccc">취소하기</ColorButton>
    <Foods>
      <li>김밥</li>
      <li>만두</li>
      <li>순대</li>
    </Foods>
    </>
  )

}


export default App4
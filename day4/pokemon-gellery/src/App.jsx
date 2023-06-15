import { useState } from 'react'
import './App.css'

function App() {
  const data = [
    {
      name: '무쇠잎새',
      type: '풀,에스퍼',
      src: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/full/101001.png'
    },
    {
      name: '미라이돈',
      type: '전기,드래곤',
      src: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/full/100801.png'
    },
    {
      name: '코라이돈',
      type: '격투,드래곤',
      src: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/full/100701.png'
    }
  ];
  const [pnum, setPnum] = new useState(0);

  return (
    <>
      <h1>Pokemon Gallery</h1>
      <div className="gallery" >
        <img src={data[pnum].src} alt="포켓몬이미지" />
        <div className="info">
          <p className="name">{data[pnum].name}</p>
          <p className="type">타입 : {data[pnum].type}</p>
        </div>
      </div>
      <div className='btnbox'>
        <button className="btn" onClick={() => { setPnum(0) }}>1010번</button>
        <button className="btn" onClick={() => { setPnum(1) }}>1009번</button>
        <button className="btn" onClick={() => { setPnum(2) }}>1008번</button>
      </div>

    </>
  )
}

export default App

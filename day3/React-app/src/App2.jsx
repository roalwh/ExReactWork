import './App.css'
import Header from './components/Header';
import CSSModule from "./components/CSSModule"

function App2() {
  const name = "고길동";
  const userinfo = {
    name: "둘리",
    age: 30
  }

  const sayHello = () => {
    alert(`안녕 ${name}`)
  }
  return (
    <>
      <Header />
      <h1 style={{ color: "red", backgroundColor: "pink" }}>App</h1>
      <p>
        content</p>
      <p>{name}</p>
      <p>{userinfo.name}/////{userinfo.age} </p>
      <button onClick={sayHello}
        style={{
          backgroundColor: "#4CAF50",
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
        }}
      >인사</button>

      <h1>CSSModule</h1>
      <CSSModule />
    </>

  )
}

export default App2

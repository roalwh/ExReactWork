
import './App.css'
function App() {
  let name = "둘리";

  const list = (
    <ul>
      <li>김밥</li>
      <li>만두</li>
      <li>순대</li>
    </ul>
  )
  let userinfo = {
    name: "고길동",
    address: "쌍문동"
  }

  return (
    <>
      <h1>App</h1>
      <p>처음작성하는 리액트 앱</p>
      <p>반가워요 {name}님</p>
      {console.log(name)}
      {list}
      {userinfo.name}는 {userinfo.address}에 삽니다.
    </>
  )

}

export default App

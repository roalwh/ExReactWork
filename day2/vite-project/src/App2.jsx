
import './App.css'
import { name,sayname,myAdd } from './MyModule';
function App2() {

  return (
    <>
      <h1>APP2</h1>
      <p>반가워요 {sayname("둘리")}님</p>
      {myAdd(5,5)}
    </>
  )

}

export default App2

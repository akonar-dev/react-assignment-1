import './App.css'
import Greetings from './components/Greetings'
import UserInfo from './components/UserInfo'

function App() {

  return (
    <>
    <Greetings/>
    <UserInfo username={"Arijeet"} age={27}/>
    </>
  )
}

export default App

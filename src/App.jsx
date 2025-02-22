import './App.css'
import Greetings from './components/Greetings'
import UserInfo from './components/UserInfo'
import UserButton from './components/UserButton'
import ItemList from './components/ItemList'

function App() {

  return (
    <>
    <Greetings/>
    <UserInfo username={"Arijeet"} age={27}/>
    <UserButton/>
    <ItemList list={['Apple', 'Banana' ,'Cherry']}/>
    </>
  )
}

export default App

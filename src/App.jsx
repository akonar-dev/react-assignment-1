import './App.css'
import Greetings from './components/Greetings'
import UserInfo from './components/UserInfo'
import UserButton from './components/UserButton'
import ItemList from './components/ItemList'
import StatusMessage from './components/StatusMessage'

function App() {

  return (
    <>
    <Greetings/>
    <UserInfo username={"Arijeet"} age={27}/>
    <UserButton/>
    <ItemList list={['Apple', 'Banana' ,'Cherry']}/>
    <StatusMessage isLoggedIn={true}/>
    {/* <StatusMessage isLoggedIn={false}/> */}
    </>
  )
}

export default App

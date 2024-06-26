import './App.css'
import CountdownTimer from './components/CountdownTimer'
import UserList from './components/UserList'
import WindowSize from './components/WindowSize'

function App() {

  return (
    <div className='flexBlocks'>
      <CountdownTimer/>
      <UserList/>
      <WindowSize/>
    </div>
  )
}

export default App

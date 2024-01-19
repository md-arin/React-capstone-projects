import ProfileCard from './Components/ProfileCard'
import './App.css'
import { useState } from 'react'

function App() {
  const [username, setUsername] = useState("")

  return (
    <>
    <div className='hero' >
        <input type="text" placeholder='Enter your github Username to fetch data' autoFocus onChange={(e) => setUsername(e.target.value)}/>
        <button>Fetch</button>
    </div>
      <ProfileCard />
    </>
  )
}

export default App

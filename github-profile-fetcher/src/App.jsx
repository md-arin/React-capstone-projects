import ProfileCard from './Components/ProfileCard'
import  axios  from 'axios'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [hide,setHide] = useState(false);
  const [username, setUsername] = useState("");
  const [dp, setDp] = useState('');
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [followers, setFollowers] = useState("")
  const [following, setFollowing] = useState("")
  const [location, setLocation] = useState("")

  useEffect(()=>{
     getData();
  },[username])

  const getData = async()=>{
    const res = await axios.get("https://api.github.com/users/"+username)
    console.log(res.data)
    setDp(res.data.avatar_url)
    setName(res.data.name);
    setBio(res.data.bio)
    setFollowers(res.data.followers)
    setFollowing(res.data.following)
    setLocation(res.data.location)
  }

  return (
    <>
    <div className='hero' >
        <input type="text" placeholder='Enter your github Username to fetch data' autoFocus onChange={(e) => setUsername(e.target.value)}/>
        <button onClick={()=>{
          setHide(true);
        }}>Fetch</button>
    </div>
      {hide ? <ProfileCard photo={dp} name={name} bio={bio} followers={followers} following={following} location={location}/> : null}
    </>
  )
}

export default App

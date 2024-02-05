import ProfileCard from './Components/ProfileCard'
import  axios  from 'axios'
import './App.css'
import { useEffect, useState } from 'react'
import { RecoilRoot, useRecoilState } from 'recoil';
import { usernameAtom } from './Components/atoms';

function App() {
return(
  <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
)
}

function MainApp(){
  console.log("Main app rendered")

  const [hide,setHide] = useState(false);
  const [username, setUsername] = useRecoilState(usernameAtom)
 

   return (
     <>
     
     <div className='hero' >
         <input type="text" placeholder='Enter your github Username to fetch data' autoFocus value={username} onChange={(e) => setUsername(e.target.value)}/>
         <button onClick={()=>{
          console.log(username);
         }}>Fetch</button>
     </div>
       {/* {hide ? <ProfileCard photo={dp} name={name} bio={bio} followers={followers} following={following} location={location}/> : null} */}
       <ProfileCard />
     </>
   )
}

export default App


import './App.css'
import Layout from './Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { BrowserRouter,Routes, Route } from "react-router-dom"
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route
       loader={githubInfoLoader}
      path='github' 
      element={<Github/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

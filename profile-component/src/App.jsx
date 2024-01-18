import ProfileCard from './components/ProfileCard'
import './App.css'

function App() {

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: "center"
    }} >
      <ProfileCard 
      name="Rita Correia"
      age="26"
      photoUrl="https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg"
      location="London"
      />
      <ProfileCard 
      name="Naruto"
      age="25"
      photoUrl="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
      location="Tokyo"
      />
      <ProfileCard 
      name="Billy James"
      age="21"
      photoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOWZM4LaEBG5h5ux83IEllVR4Y1vRwsWtLdA&usqp=CAU"
      location="Houston"
      />
      
    </div>
  )
}

export default App

import PhoneOtpForm from './Components/PhoneOtpForm'
import './App.css'

function App() {
 

  return (
    <>
      <div className='text-center mt-20 shadow-xl bg-white h-60 w-96 rounded-xl '>
        <h1 className=' text-3xl m-10 pt-8'>Login with Phone</h1>
        <PhoneOtpForm/>
      </div>
      <p className='text-center mt-8'> Made with ❤️ by <i>Md Arin Alam</i></p>
    </>
  )
}

export default App

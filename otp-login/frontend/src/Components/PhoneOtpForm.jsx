import { useRef, useState } from "react";
import OtpInput from "./OtpInput";

function PhoneOtpForm() {
  const [number,setNumber] = useState('')
  const [showOtp, setShowOtp] = useState(false);

  const inputRef = useRef();

  const handleSubmit = (event)=>{
      event.preventDefault();

      //phone Validation
      const regex = /[^0-9]/g;
      if(number.length < 10 || regex.test(number)){
        alert("Please enter a valid phone number")
        return;
      }
      //Call BE API

      setShowOtp(true);
  }

  function onOtpSubmit(otp) {
    console.log("login Succesfull", otp);
  }

  return (
    <div className=" mt-7 ">
    { !showOtp? (
    <form onSubmit={handleSubmit}>

        <input 
        className=" m-8 shadow appearance-none w-70 focus:outline-gray-700 " 
        type="text" 
        ref={inputRef.current} 
        placeholder="Enter your mobile Number "  
        value={number} 
        onChange={(e)=>setNumber(e.target.value)}
        />

        <button className=" bg-black text-white rounded-md p-3 hover:bg-slate-200 hover:text-black" type="submit"  >Get OTP</button>

      </form> ) : (
        <div>
          <p>Enter OTP sent to : <b>{number}</b></p>
          <OtpInput length={4} onOtpSubmit = {onOtpSubmit} />
        </div>)}
    </div>
  )
}

export default PhoneOtpForm
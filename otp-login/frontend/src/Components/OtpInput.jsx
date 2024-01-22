import React, { useEffect, useRef, useState } from 'react'

function OtpInput({length,onOtpSubmit = ()=>{}}) {

    const [otp, setOtp] = useState(new Array(length).fill(""))

    const inputRefs = useRef([]);

    useEffect(()=>{
        if(inputRefs.current[0]){
            inputRefs.current[0].focus();
        }
    },[])

    const handleChange = (index,e)=>{
        const value = e.target.value
        if(isNaN(value)) return;

        const newOtp = [...otp];
        //allow only one input
        newOtp[index] = value.substring(value.length -1)
        setOtp(newOtp);

        //submit trigger
        const combinedOtp = newOtp.join("");

        //Sending the otp back to the Parent, for BE verification
        if(combinedOtp.length === length){
        onOtpSubmit(combinedOtp);
        }

        //Move to the next input field if current is filled
        if(value && index<length-1 && inputRefs.current[index + 1]){
            //if value Exist, index is less than the last field and if there is something after the current field
            inputRefs.current[index+1].focus()
        }
    }

    const handleKeydown = (index,e)=>{
        if (
            e.key === "Backspace" &&
            !otp[index] &&
            index > 0 &&
            inputRefs.current[index - 1]
          ) {
            // Move focus to the previous input field on backspace
            inputRefs.current[index - 1].focus();
          }
    }

    const handleClick = (index) =>{

    }

  return (
    <div>
        {otp.map((value,index)=>{
            return(
                <input 
                 key={index}
                 type='text'
                 ref={(input)=> inputRefs.current[index] = input}
                 value={value}
                 onChange={(e)=> handleChange(index,e)}
                 onClick={()=> handleClick(index)}
                 onKeyDown={(e)=> handleKeydown(index,e)}
                 className=' border border-gray-900 shadow-md appearance-none w-10 h-10 m-2 text-center text-base mt-8 focus:outline-gray-700 ' 
                />
            )
        })}
    </div>
  )
}

export default OtpInput
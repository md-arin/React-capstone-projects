import { useState } from "react"


function App() {
    const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap mx-20 justify-center
      bottom-12 insert-x-0 px-2">

        <div className="flex flex-wrap  justify-center *:gap-3 
        shadow-lg bg-white px-6 py-3 rounded-3xl">

          <button 
          onClick={()=>setColor("red")}
          className="outline-none px-4 py-1 rounded-full
           text-white shadow-lg mx-3 my-3"
           style={{backgroundColor: "red"}} >
            Red
          </button>

          <button 
          onClick={()=>setColor("blue")}
          className="outline-none px-4 py-1 rounded-full
           text-white shadow-lg mx-3 my-3"
           style={{
            backgroundColor: "blue",
           }} >
            blue
          </button>

          <button 
          onClick={()=>setColor("green")}
          className="outline-none px-4 py-1 rounded-full
           text-white shadow-lg mx-3 my-3"
           style={{backgroundColor:"green"}} >
            Green
          </button>

          <button 
          onClick={()=>setColor("white")}
          className="outline-none px-4 py-1 rounded-full
           text-black shadow-lg mx-3 my-3"
           style={{backgroundColor:"white"}} >
            White
          </button>

          <button 
          onClick={()=>setColor("black")}
          className="outline-none px-4 py-1 rounded-full
           text-white shadow-lg mx-3 my-3"
           style={{backgroundColor:"black"}} >
            Black
          </button>

          <button 
          onClick={()=>setColor("lavender")}
          className="outline-none px-4 py-1 rounded-full
           text-black shadow-lg mx-3 my-3"
           style={{backgroundColor:"lavender"}} >
            lavender
          </button>

          <button 
          onClick={()=>setColor("#FFE5B4")}
          className="outline-none px-4 py-1 rounded-full
           text-black shadow-lg mx-3 my-3"
           style={{backgroundColor:"#FFE5B4"}} >
            Peach
          </button>

          <button 
          onClick={()=>setColor("#BAB86C")}
          className="outline-none px-4 py-1 rounded-full
           text-black shadow-lg mx-3 my-3"
           style={{backgroundColor:"#BAB86C"}} >
            Olive Green
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default App

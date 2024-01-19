import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [words, setWords] = useState(0)
  const [generatedWord, setgeneratedWord] = useState("")
  
  const generate = useCallback(() => {
      let generatedWord = ""
      const sampleWord = "hi"

      for(let i = 0;i<words;i++){
        generatedWord += sampleWord;
        generatedWord += " "
      }
      return generatedWord;
  },[words])

  return (
    <>
      <div style={{
        marginTop: "60px"
      }}>
        <h1 style={{
          textAlign: "center"
        }}>Para Generator</h1>
        <div className='section'>
          <input type="text" name="" id="" placeholder='Enter number of words' autoFocus onChange={(e)=> setWords(e.target.value)} />
          <button onClick={()=>{
            setgeneratedWord(generate)
          }}>Generate</button>
        </div>
        
        <div className='para'>
        <p>{generatedWord}</p>
        </div>
       
      </div>
    </>
  )
}

export default App

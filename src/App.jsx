
import { useState } from 'react'
import './App.css'
// import Card from './assets/components/Card'

function App() {
const [color,setColor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color }}>
    <div className='fixed flex flex-wrap justify-center bottom-8 inset-x-0 px-2' >
      <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl'> 
      <button onClick={() => setColor("red")} className='outline-none px-4 rounded-xl
      text-white' style={{backgroundColor:"red"}}>Red</button>
      <button onClick={() => setColor("green")} className='outline-none px-4 rounded-xl
      text-white' style={{backgroundColor:"green"}}>Green</button>
      <button onClick={() => setColor("brown")} className='outline-none px-4 rounded-xl
      text-white' style={{backgroundColor:"brown"}}>Brown</button>
      <button onClick={() => setColor("pink")} className='outline-none px-4 rounded-xl
      text-white' style={{backgroundColor:"pink"}}>Pink</button>
      <button onClick={() => setColor("blue")} className='outline-none px-4 rounded-xl
      text-white' style={{backgroundColor:"blue"}}>Blue</button>
      <button onClick={() => setColor("gray")} className='outline-none px-4 rounded-xl
      text-white' style={{backgroundColor:"gray"}}>Gray</button>
      <button onClick={() => setColor("orange")} className='outline-none px-4 rounded-xl
      text-white' style={{backgroundColor:"orange"}}>Orange</button>
      </div>
    </div>
    

    </div>




      {/* <h1 className='bg-green-400 text-black rounded-xl mb-4' >my name is Khan</h1>
      <Card  username = "Shakeel Ahmad" btnText = "Click Me "/>
      <Card  username= "Khan" btnText="Visit Me"/> */}

    </>
  )
}

export default App

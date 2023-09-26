
import './App.css'
import Card from './assets/components/Card'

function App() {


  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl mb-4' >my name is Khan</h1>
      <Card  username = "Shakeel Ahmad" btnText = "Click Me "/>
      <Card  username= "Khan" btnText="Visit Me"/>

    </>
  )
}

export default App

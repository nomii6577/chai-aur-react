import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [counter, setCounter] = useState(5);

    const addValue = () =>{
      console.log("clicked", counter);
      // counter = counter + 1;
      setCounter(counter + 1)
    }

    const removeValue = () =>{
      setCounter(counter - 1)
    }

    
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

        <button onClick={addValue}>Add value</button><br /><br />
        <button onClick={removeValue}>Remove value</button>
      
    </>
  )
}

export default App

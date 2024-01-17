import './App.css'
import { useState } from 'react';

function App() {

  const [counter, setCounter]=useState(0)
  // let counter = 5;

  const addValue = () =>{
    
  }

  return (
    <>
    <h1>Chai aur React | Sameer</h1>
    <h2>counter value: {counter}</h2>

    <button onClick={addValue}>Add value</button><br/><br/>
    <button>Remove value</button>
    </>
  )
}

export default App

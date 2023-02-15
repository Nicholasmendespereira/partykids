import { useState } from 'react'

import Ohlala from './Pages/Ohlala'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Ohlala/>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState('Press')

  const handleKeyPress = (e) => {
    setCode(e.code)
  }

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress)
  })

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <p>{count}</p>
        <h2>Key Code</h2>
        <p>{code}</p>
      </header>
    </div>
  )
}

export default App

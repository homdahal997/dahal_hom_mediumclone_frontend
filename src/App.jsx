import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Web Application</h1>
      <p className="read-the-docs">
        This is the home of cool web Application
      </p>
    </>
  )
}

export default App

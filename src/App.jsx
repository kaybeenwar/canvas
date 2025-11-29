import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './HomePage.jsx'
import CanvasDashboard from './Dashboard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <CanvasDashboard/>
  )
}

export default App

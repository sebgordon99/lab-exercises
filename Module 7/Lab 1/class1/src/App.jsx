import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Clock } from './Clock'
import { ActivityFinder } from './Activity'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Clock />
        <ActivityFinder />
      </div>
    </>
  )
}

export default App

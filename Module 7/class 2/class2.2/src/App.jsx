import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RefCounter } from './refCounter'
import { VideoPlayer } from './videoplayer'
import { BitcoinRates } from './module7lab2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
<BitcoinRates />
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import './calcstyles.css'
import { ButtonDisplay } from './buttons'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <div className="calculator">
        <div className="display-container">
          <div id="operation-display" className="operation-display"></div>
          <div id="display" className="display">
            <ButtonDisplay />
          </div>
        </div>

        <div className="button-grid">
          <button id="reset-btn" className="btn btn-reset">Reset</button>

          <button className="btn btn-number" data-value="7">7</button>
          <button className="btn btn-number" data-value="8">8</button>
          <button className="btn btn-number" data-value="9">9</button>
          <button className="btn btn-operation" data-value="/">/</button>

          <button className="btn btn-number" data-value="4">4</button>
          <button className="btn btn-number" data-value="5">5</button>
          <button className="btn btn-number" data-value="6">6</button>
          <button className="btn btn-operation" data-value="x">x</button>

          <button className="btn btn-number" data-value="1">1</button>
          <button className="btn btn-number" data-value="2">2</button>
          <button className="btn btn-number" data-value="3">3</button>
          <button className="btn btn-operation" data-value="-">-</button>

          <button className="btn btn-number btn-zero" data-value="0">0</button>
          <button className="btn btn-operation" data-value="+">+</button>

          <button id="equals-btn" className="btn btn-equals">=</button>
        </div>
      </div>
    </div>

    <script src="script.js"></script>
    </>
  )
}

export default App

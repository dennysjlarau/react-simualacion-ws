import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <h1>Vite + React</h1>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p>
          Click on the Vite and React logos to learn more
        </p>
      </div>

      <div className="container py-4 px-3 mx-auto">
        <h1>Botones</h1>
        <button className="btn btn-primary">Primary button</button>
        <button className="btn btn-secondary">Primary button</button>
      </div>

      <p>
          Click on the Vite and React logos to learn more
        </p>
    
    </div>
    
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="pera">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim error dolorum vero sed, laborum, repellat provident iure porro, quis a commodi maxime consequatur tempora. Sed, error. Quod natus nesciunt cumque.
      </p>
      <input className='input'  type='text'/> 
      <button className='btn btn-primary'>demo</button>
      <a href="">Demo Check</a>
    </>
  )
}

export default App

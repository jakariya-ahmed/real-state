import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import Header from './components/home/header/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    
      <Header />
      <AppRouter />
      <Footer /> 

    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Navbar />
      <CartContainer />
    </div>

  )
}
  export default App

import { Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Homepage from './Pages/Landing/Homepage'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element ={<Homepage/>}/>
      <Route path="/home" element ={<NotFound/>}/>
    </Routes>
  )
}

export default App

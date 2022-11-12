import { Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element ={<Dashboard/>}/>
      <Route path="/home" element ={<NotFound/>}/>
    </Routes>
  )
}

export default App

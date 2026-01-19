import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import StatCard from './Components/Cards/StatCard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Dashboard/>} />
        
      </Routes>
    </Router>
 
  )
}

export default App
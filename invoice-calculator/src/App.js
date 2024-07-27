import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/Home'

function App() {
  return (
    <Router>
    <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path='/register' element={<Register />} />
    </Routes>
    </Router>
  )
}

export default App
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/register'
import Home from './pages/Home'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <Router>
    <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path='/register' element={<Register />} />
    </Routes>
    <ToastContainer />
    </Router>
  )
}

export default App
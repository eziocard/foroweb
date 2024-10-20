import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
function App() {

  return (
       <Router>
       <div>
        <h1 id = 'title'>Foro UA</h1>
        </div>
      <div>
       
        <Header />
         <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path = "/Login" element = {<Login />} />
        </Routes>
      
      </div>
    </Router>        
  

  )
}

export default App

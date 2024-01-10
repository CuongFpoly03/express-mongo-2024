// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Product from './pages/Products'
import Login from './pages/Login'
import Logout from './pages/Home'
function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/product'} element={<Product/>} />
            <Route path={'/login'} element={<Login/>} />
            <Route path={'/logout'} element={<Logout/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

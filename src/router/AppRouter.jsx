import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainScreen from '../views/MainScreen'
import DetalleScreen from '../views/DetalleScreen'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainScreen/>} />
        <Route path='/detalle/:id' element={<DetalleScreen/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
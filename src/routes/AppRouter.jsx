import React from 'react'
import { BrowserRouter, Route, Routes as Routess } from 'react-router-dom'
import PageNotFound from '../components/PageNotFound'
import Home from '../components/Home'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routess>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routess>
  </BrowserRouter>
  )
}

export default AppRouter
import { RouterProvider } from 'react-router-dom'
import React from 'react'
import './App.css'
import rootRouter from './routers'

function App () {
  return (
    <div className='App'>
      <RouterProvider router={rootRouter} />
    </div>
  )
}

export default App

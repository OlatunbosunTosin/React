import { useState } from 'react'

import './index.css'
import {  RouterProvider } from 'react-router';
import { router } from '../src/routes/router';


function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

import React, { Suspense, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Component1 = React.lazy(() => import('./components/component1'))
const Component2 = React.lazy(() => import('./components/component2'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <a href='/'>Home</a><br></br>
          <a href='/2'>setting</a>

          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Component1 />} />
              <Route path='/2' element={<Component2 />} />
            </Routes>
          </Suspense>
        </BrowserRouter>

      </div>

    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'

import Home from './pages/Home'

import './index.css'

const App = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home page="home" />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App

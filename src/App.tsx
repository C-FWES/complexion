import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LSidebar from './components/sidebar/LeftSidebar'
import './App.css'

function App() {

  return (
    <>
      <div className='layoutContainer'>
        <LSidebar></LSidebar>
      </div>
    </>
  )
}

export default App

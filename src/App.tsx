import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LSidebar from './components/sidebar/LeftSidebar'
import Bar from './components/menu/Bar'
import Editor from './components/editor/Editor'
import './App.css'

function App() {

  return (
    <>
      <div className='layoutContainer'>
        <LSidebar></LSidebar>
        <Bar></Bar>
        <div className='rightAlign'>
          <Editor></Editor>
        </div>
      </div>
    </>
  )
}

export default App

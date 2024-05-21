import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LSidebar from './components/sidebar/LeftSidebar'
import Bar from './components/menu/Bar'
import Editor from './components/editor/Editor'
import SlideContext from './SlideContext'
import './App.css'

function App() {

  const [slides, setSlides] = useState([])

  return (
    <SlideContext.Provider value={{slides, setSlides}}>
      <div className='layoutContainer'>
        <LSidebar></LSidebar>
        <Bar></Bar>
        <div className='rightAlign'>
          <Editor></Editor>
        </div>
      </div>
    </SlideContext.Provider>
  )
}

export default App

import { useState, useContext } from 'react'

import '../../App.css'

function Bar() {

  const enterPresentationInterface = () => {
    
  }

  return (
    <>
      <div className='barContainer'>
        <div className='barIconWrapper'>
            <span className='barTitle'>title</span>
        </div>
        <span className='barPlayButtonContainer' onClick={enterPresentationInterface}>Present</span>
      </div>
    </>
  )
}

export default Bar
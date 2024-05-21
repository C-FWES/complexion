import { useState, useContext } from 'react'

import '../../App.css'

function Bar() {

  return (
    <>
      <div className='barContainer'>
        <div className='barIconWrapper'>
            <span className='barTitle'>title</span>
        </div>
        <span className='barPlayButtonContainer'>Present</span>
      </div>
    </>
  )
}

export default Bar
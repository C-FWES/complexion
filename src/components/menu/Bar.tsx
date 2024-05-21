import { useState, useContext } from 'react'
import SlideContext from '../../SlideContext'
import '../../App.css'
import PresenterModal from '../slide/PresenterModal'

function Bar() {

  const {slides, setSlides} = useContext(SlideContext)
  const [presenterModalOpen, setPresenterModalOpen] = useState(false)

  const enterPresentationInterface = () => {
    setPresenterModalOpen(true)
  }

  const onHide = () => {
    setPresenterModalOpen(false)
  }

  return (
    <>
      <div className='barContainer'>
        <PresenterModal open={presenterModalOpen} onHide={onHide} slides={slides} />
        <div className='barIconWrapper'>
            <span className='barTitle'>title</span>
        </div>
        <span className='barPlayButtonContainer' onClick={enterPresentationInterface}>Present</span>
      </div>
    </>
  )
}

export default Bar
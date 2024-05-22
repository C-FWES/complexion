import React, { useState } from "react";
import Modal from 'react-modal';
import PresenterNavigator from "./PresenterNavigator";
import PresenterSlide from "./PresenterSlide";

const PresenterModal = ({open, onHide, slides}) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    const incrementSlide = () => {
        if (currentSlideIndex < slides.length - 1) {
            setCurrentSlideIndex(currentSlideIndex + 1)
        }
    }

    const decrementSlide = () => {
        if (currentSlideIndex > 0) {
            setCurrentSlideIndex(currentSlideIndex - 1)
        }
    }

    return (
        <Modal 
        isOpen={open} 
        onRequestClose={onHide}
        style={{
            overlay: {
                zIndex: '999',
            },
            content: {
                backgroundColor: 'var(--muted-text)',
                color: 'var(--slide-text-color)',
                width: '100vw',
                height: '100vh',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }
        }}>
            <div className="presentationContainer">
                {slides.map((slide, i) => (
                    <div style={{display: i === currentSlideIndex ? 'initial' : 'none'}}>
                        <PresenterSlide slideInfo={slide} index={i}/>
                    </div>
                ))
                }
                <PresenterNavigator incrementSlide={incrementSlide} decrementSlide={decrementSlide} slides={slides} currentIndex={currentSlideIndex}></PresenterNavigator>
            </div>
        </Modal>
    )

}

export default PresenterModal
import React, { useState } from "react";
import Modal from 'react-modal';
import PresenterNavigator from "./PresenterNavigator";
import PresenterSlide from "./PresenterSlide";

const PresenterModal = ({open, onHide, slides}) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    const incrementSlide = () => {
        setCurrentSlideIndex(currentSlideIndex + 1)
    }

    const decrementSlide = () => {
        setCurrentSlideIndex(currentSlideIndex - 1)
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
                {
                    <PresenterSlide slideInfo={slides[currentSlideIndex]} index={currentSlideIndex}></PresenterSlide>
                }
                <PresenterNavigator incrementSlide={incrementSlide} decrementSlide={decrementSlide} slides={slides}></PresenterNavigator>
            </div>
        </Modal>
    )

}

export default PresenterModal
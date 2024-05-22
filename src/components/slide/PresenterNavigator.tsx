// a widget to allow navigating from slide to slide
import React, { useEffect } from "react";
import { useState } from "react";

const PresenterNavigator = ({incrementSlide, decrementSlide, slides, currentIndex}) => {
    
    // use arrow keys bind
    useEffect(() => {
        const down = (e) => {
            if (e.key === 'ArrowLeft') {
                decrementSlide()
            } else if (e.key === 'ArrowRight') {
                incrementSlide()
            }
        }

        document.addEventListener('keydown', down)

        return () => document.removeEventListener('keydown', down)
    }, [currentIndex])
    
    return (
        <div className="presenterNavigatorContainer">
            <div className="presenterNavigatorNavigationWrapper">
                <button className="presenterNavigatorIncrementButton" onClick={decrementSlide}>Prev</button>
                <div className="presenterNavigatorSlideCounterWrapper">
                    <span className="presenterNavigatorSlideCounter">{currentIndex + 1} / {slides.length}</span>
                </div>
                <button className="presenterNavigatorIncrementButton" onClick={incrementSlide}>Next</button>
            </div>
        </div>
    )
}

export default PresenterNavigator
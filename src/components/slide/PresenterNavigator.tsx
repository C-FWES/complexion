// a widget to allow navigating from slide to slide
import React from "react";
import { useState } from "react";

const PresenterNavigator = ({incrementSlide, decrementSlide, slides}) => {
    return (
        <div className="presenterNavigatorContainer">
            <div className="presenterNavigatorNavigationWrapper">
                <button className="presenterNavigatorIncrementButton" onClick={decrementSlide}>Prev</button>
                <div className="presenterNavigatorSlideCounterWrapper">
                    <span className="presenterNavigatorSlideCounter">{slides.length}</span>
                </div>
                <button className="presenterNavigatorIncrementButton" onClick={incrementSlide}>Next</button>
            </div>
        </div>
    )
}

export default PresenterNavigator
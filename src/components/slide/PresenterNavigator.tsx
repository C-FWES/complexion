// a widget to allow navigating from slide to slide
import React from "react";
import { useState } from "react";

const PresenterNavigator = () => {
    return (
        <div className="presenterNavigatorContainer">
            <div className="presenterNavigatorNavigationWrapper">
                <button className="presenterNavigatorIncrementButton">Prev</button>
                <div className="presenterNavigatorSlideCounterWrapper">
                    <span className="presenterNavigatorSlideCounter">1 / 20</span>
                </div>
                <button className="presenterNavigatorIncrementButton">Next</button>
            </div>
        </div>
    )
}

export default PresenterNavigator
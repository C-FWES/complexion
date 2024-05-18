import React from "react";
import { useState } from 'react'

function PreviewSlide({slideInfo}) {

    const [header, setHeader] = useState(null)
    const [subHeader, setSubheader] = useState(null)
    const [ol, setOl] = useState(null)
  
    return (
      <>
        <div className='previewSlideContainer'>
          <div className="previewSlideTextContainer">
            
          </div>
        </div>
      </>
    )
  }
  
  export default PreviewSlide
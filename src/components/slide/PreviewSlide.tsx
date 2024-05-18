import React, { useEffect } from "react";
import { useState } from 'react'

function PreviewSlide({slideInfo}) {

    const [header, setHeader] = useState(null)
    const [subHeader, setSubheader] = useState(null)
    const [ol, setOl] = useState(null)

    useEffect(() => {
      setHeader(slideInfo[1])
    }, [slideInfo])
  
    return (
      <>
        <div className='previewSlideContainer'>
          <div className="previewSlideTextContainer">
            {header && <h1>{header}</h1>}
          </div>
        </div>
      </>
    )
  }
  
  export default PreviewSlide
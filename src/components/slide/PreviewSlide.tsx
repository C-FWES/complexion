import React, { useEffect } from "react";
import { useState } from 'react'
import { gradeSlideFluorescentHsl } from "../../theme/FluorescentGrader";

function PreviewSlide({slideInfo, index}) {

    const [header, setHeader] = useState(null)
    const [subHeader, setSubheader] = useState(null)
    const [ol, setOl] = useState(null)

    useEffect(() => {
      setHeader(slideInfo[1])
    }, [slideInfo])

    const slideBgHsl = gradeSlideFluorescentHsl(index);
  
    return (
      <>
        <div className='previewSlideContainer' style={{backgroundColor: slideBgHsl}}>
          <div className="previewSlideTextContainer">
            {header && <h1>{header}</h1>}
          </div>
        </div>
      </>
    )
  }
  
  export default PreviewSlide
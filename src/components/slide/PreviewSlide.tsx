import React, { useEffect } from "react";
import { useState } from 'react'
import { gradeSlideFluorescentHsl } from "../../theme/FluorescentGrader";
import { parsePrefix } from "../../parse/ParsePrefix";

function PreviewSlide({slideInfo, index}) {

    const [header, setHeader] = useState(null)
    const [subHeader, setSubheader] = useState(null)
    const [subsubHeader, setSubsubheader] = useState(null)
    const [ol, setOl] = useState(null)

    useEffect(() => {
      // parse markdown strings
      for (const stem of slideInfo[1]) {
        if (stem && stem.startsWith('#')) {
          const headerType = parsePrefix(stem)
          if (headerType === 'h1') {
            setHeader(stem.substring(2))
          } else if (headerType === 'h2') {
            setSubheader(stem.substring(3))
          } else if (headerType === 'h3') {
            setSubsubheader(stem.substring(4))
          }
        }
      }
    }, [slideInfo])

    const slideBgHsl = gradeSlideFluorescentHsl(index);
  
    return (
      <>
        <div className='previewSlideContainer' style={{backgroundColor: slideBgHsl}}>
          <div className="previewSlideTextContainer">
            {header && <h1>{header}</h1>}
            {subHeader && <h2>{subHeader}</h2>}
            {subsubHeader && <h3>{subsubHeader}</h3>}
          </div>
        </div>
      </>
    )
  }
  
  export default PreviewSlide
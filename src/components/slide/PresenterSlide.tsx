import React, { useEffect } from "react";
import { useState } from 'react'
import { gradeSlideFluorescentHsl } from "../../theme/FluorescentGrader";
import { parsePrefix } from "../../parse/ParsePrefix";
import { parseOl } from "../../parse/ParseOl";

function PresenterSlide({slideInfo, index}) {

    const [header, setHeader] = useState(null)
    const [subHeader, setSubheader] = useState(null)
    const [subsubHeader, setSubsubheader] = useState(null)
    const [ol, setOl] = useState([])

    console.log(ol)

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
        } else if (stem && !isNaN(stem.charAt(0)) && stem.charAt(1) === '.') {
            const olIndex = parseOl(stem)
            setOl(prevOl => {
                let temp = [...prevOl]
                temp[olIndex] = stem
                return temp
            })
        }
      }
    }, [])

    const slideBgHsl = gradeSlideFluorescentHsl(index);
  
    return (
      <>
        <div className='presenterSlideContainer' style={{backgroundColor: slideBgHsl}}>
          <div className="presenterSlideTextContainer">
            {header && <h1>{header}</h1>}
            {subHeader && <h2>{subHeader}</h2>}
            {subsubHeader && <h3>{subsubHeader}</h3>}
            {ol.map((olItem, i) => (
              <p key={i}>{olItem}</p>
            ))}
          </div>
        </div>
      </>
    )
  }
  
  export default PresenterSlide
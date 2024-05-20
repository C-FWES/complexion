import React, { useEffect } from "react";
import { useState } from 'react'
import PreviewSlide from "../slide/PreviewSlide";
import { gradeSlideIdFluorescentHsl } from "../../theme/FluorescentGrader";

function LSidebar() {

    const [createdSlides, setCreatedSlides] = useState([])
    console.log(createdSlides)

    useEffect(() => {
      const handleDeploySlide = (event) => {
        // create an empty slide object
        const slideObj = [event.detail, []]
        setCreatedSlides(prevSlides => [...prevSlides, slideObj])
      }

      const handleRemoveSlide = (event) => {
        const index = event.detail;
        if (index > -1) {
          setCreatedSlides(createdSlides => {
            return createdSlides.filter((s, i) => (s[0] != index))
          })
        }
      }

      const updateSlideContent = (event) => {
        const slideIndex = event.detail[0]
        console.log("slide index " + slideIndex)
        const contentObject = event.detail[1]
        console.log("content to " + contentObject)
        const contentLineIndex = event.detail[2]
        // update content here
        setCreatedSlides(prevSlides => {
          return prevSlides.map((slide, index) => {
            if (slide[0] === slideIndex && contentObject.length > 0 && contentObject != '-' && contentObject != '--') {
              let existingLines = slide[1];
              if (contentLineIndex !== -1) {
                existingLines[contentLineIndex] = contentObject;
              }
              return [slide[0], existingLines]; // update the second index with contentObject
            } else {
              return slide; // return the slide unchanged
            }
          });
        });
      }

      window.addEventListener('deploySlide', handleDeploySlide)
      window.addEventListener('removeSlide', handleRemoveSlide)
      window.addEventListener('updateSlide', updateSlideContent)

      return () => {
        window.removeEventListener('deploySlide', handleDeploySlide)
        window.removeEventListener('removeSlide', handleRemoveSlide)
        window.removeEventListener('updateSlide', updateSlideContent)
      }
    }, [createdSlides])
  
    return (
      <>
        <div className='leftSidebarContainer'>
            {createdSlides.map((slide, i) => (
              <div className="previewObject">
                <span className="slideId" style={{backgroundColor: gradeSlideIdFluorescentHsl(i)}}>{i + 1}</span>
                <PreviewSlide slideInfo={slide} key={i} index={i}></PreviewSlide>
              </div>
            ))
          }
        </div>
      </>
    )
  }
  
  export default LSidebar
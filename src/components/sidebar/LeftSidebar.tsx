import React, { useEffect } from "react";
import { useState } from 'react'
import PreviewSlide from "../slide/PreviewSlide";

function LSidebar() {

    const [createdSlides, setCreatedSlides] = useState([])
    console.log(createdSlides)

    useEffect(() => {
      const handleDeploySlide = (event) => {
        // create an empty slide object
        const slideObj = [event.detail, ""]
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
        // update content here
        setCreatedSlides(prevSlides => {
          return prevSlides.map((slide, index) => {
            if (slide[0] === slideIndex && contentObject.length > 0) {
              console.log('good!')
              return [slide[0], contentObject]; // update the second index with contentObject
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
            {createdSlides.map((slide) => (
              <PreviewSlide></PreviewSlide>
            ))
          }
        </div>
      </>
    )
  }
  
  export default LSidebar
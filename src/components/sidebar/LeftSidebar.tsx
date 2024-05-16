import React, { useEffect } from "react";
import { useState } from 'react'
import PreviewSlide from "../slide/PreviewSlide";

function LSidebar() {

    const [createdSlides, setCreatedSlides] = useState([])

    useEffect(() => {
      const handleDeploySlide = (event) => {
        // create an empty slide object
        const slideObj = [event.detail, "empty"]
        setCreatedSlides(prevSlides => [...prevSlides, slideObj])
        console.log(createdSlides)
      }

      const handleRemoveSlide = (event) => {
        const index = event.detail;
        if (index > -1) {
          setCreatedSlides(createdSlides => {
            return createdSlides.filter((s, i) => (s[0] != index))
          })
        }
      }

      window.addEventListener('deploySlide', handleDeploySlide)
      window.addEventListener('removeSlide', handleRemoveSlide)

      return () => {
        window.removeEventListener('deploySlide', handleDeploySlide)
        window.removeEventListener('removeSlide', handleRemoveSlide)
      }
    }, [])
  
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
import React, { useEffect } from "react";
import { useState } from 'react'
import PreviewSlide from "../slide/PreviewSlide";

function LSidebar() {

    const [createdSlides, setCreatedSlides] = useState([])

    useEffect(() => {
      const handleDeploySlide = (event) => {
        // create an empty slide object
        const slideObj = "empty"
        setCreatedSlides(prevSlides => [...prevSlides, slideObj])
        console.log(createdSlides)
      }

      window.addEventListener('deploySlide', handleDeploySlide)

      return () => {
        window.removeEventListener('deploySlide', handleDeploySlide)
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
import React from "react";
import { useState } from 'react'
import PreviewSlide from "../slide/PreviewSlide";

function LSidebar() {
  
    return (
      <>
        <div className='leftSidebarContainer'>
            <PreviewSlide></PreviewSlide>
            <PreviewSlide></PreviewSlide>
            <PreviewSlide></PreviewSlide>
        </div>
      </>
    )
  }
  
  export default LSidebar
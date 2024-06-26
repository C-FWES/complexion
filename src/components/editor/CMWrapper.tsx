import React, { useRef } from "react";
import { useState } from 'react'
import { UnControlled as CodeMirror } from "react-codemirror2";
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/markdown/markdown';

function CMWrapper() {

  // const prevValue = useRef('');
  const prevIndices = useRef([]);

  const handleChange = (editor, data, value) => {
    const prevLines = prevIndices.current;
    const currentBreaks = value.split('\n').map((line, index) => line === '---' ? index : -1).filter(index => index !== -1);
    // console.log(currentBreaks)

    const lines = value.split('\n')

    // check if slide break is deleted
    const deletedIndex = prevLines.find(index => !currentBreaks.includes(index));
    if (deletedIndex !== undefined) {
      // console.log(deletedIndex)
      const event = new CustomEvent('removeSlide', { detail: deletedIndex });
      // console.log(event)
      window.dispatchEvent(event);
    } 

    // check if slide break is added
    const addedIndex = currentBreaks.find(index => !prevLines.includes(index));
    if (addedIndex !== undefined) {
      const event = new CustomEvent('deploySlide', { detail: addedIndex });
      window.dispatchEvent(event);
    }

    prevIndices.current = currentBreaks;

    // find written markdown content, and assign it to the correct slide 
    lines.forEach((line, index) => {
      if (line !== '---') {
        const slideBreakIndex = currentBreaks.filter(breakIndex => breakIndex < index);
        const belongsToSlideBreak = slideBreakIndex[slideBreakIndex.length - 1];
        // console.log(`text on line ${index} belongs to slide break at line ${belongsToSlideBreak}`);
        const event = new CustomEvent('updateSlide', { detail: [belongsToSlideBreak, line, index]})
        window.dispatchEvent(event);
      }
    });
  };
  
    return (
      <>
        <div className='cmContainer'>
          <CodeMirror
            options={{
              // lineNumbers: true,
              mode: 'markdown',
            }}
            onChange={handleChange}
          />
        </div>
      </>
    )
  }
  
  export default CMWrapper
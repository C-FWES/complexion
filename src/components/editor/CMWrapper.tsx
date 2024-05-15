import React from "react";
import { useState } from 'react'
import { UnControlled as CodeMirror } from "react-codemirror2";
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/markdown/markdown';

function CMWrapper() {

  const handleChange = (editor, data, value) => {
    const lines = value.split('\n');
    const lastLine = lines[lines.length - 1];

    if (lastLine === '---') {
      // Dispatch a new event
      const event = new Event('newLineWithDashes');
      window.dispatchEvent(event);
    }
  };
  
    return (
      <>
        <div className='cmContainer'>
          <CodeMirror
            options={{
              lineNumbers: true,
              mode: 'markdown',
            }}
            onChange={handleChange}
          />
        </div>
      </>
    )
  }
  
  export default CMWrapper
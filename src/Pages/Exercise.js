import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import './Exercise.css'

function Exercise() {

    const iframe = document.getElementById('iframe');

    const sendDataToIframe = (data) => {
        if (iframe) {
          iframe.contentWindow.postMessage(data);
        } else {
          console.error('Iframe not found.');
        }
      };
  
      // Example data
      const dataToSend = {
        message: 'Hello from React parent component!',
      };

  
  return (
    <div>
      <Navbar/>
      <div className='frame'>

<iframe
    src="https://pn23-hacklyticsgradio.hf.space"
    frameborder="0"
    width="1240"
    height="720"
    allow="camera"
    class="gradio-asr"
></iframe>
      </div>


    <button onClick={() => sendDataToIframe(dataToSend)}>Click to send data to iframe</button>

    </div>
  )
}

export default Exercise
import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'

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
    <iframe
      id="iframe"
      src="https://ohmcpatel-trial.hf.space"
      frameborder="0"
      width="850"
      height="450"
    ></iframe>

    <button onClick={() => sendDataToIframe(dataToSend)}>Click to send data to iframe</button>

    </div>
  )
}

export default Exercise
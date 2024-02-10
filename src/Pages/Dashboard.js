import React, { useState, useEffect } from 'react'

function Dashboard() {

    const iframe = document.getElementById('iframe');

    const sendDataToIframe = (data) => {
        if (iframe) {
          iframe.contentWindow.postMessage(data, '*');
        } else {
          console.error('Iframe not found.');
        }
      };
  
      // Example data
      const dataToSend = {
        message: 'Hello from React parent component!',
      };

      useEffect(() => {
        sendDataToIframe(dataToSend);
      }, [])
  
  return (
    <div>
    <iframe
        src="https://hacklytics-hacklytics.hf.space"
        frameborder="0"
        width="850"
        height="450"
    ></iframe>
    </div>
  )
}

export default Dashboard
import React from 'react'
import SignatureCanvas from 'react-signature-canvas';

function Foreground() {
  return (
    <>
    <SignatureCanvas penColor='red'
    canvasProps={{width: 1100,  height: 600, border:'4px solid white',className: 'sigCanvas'}} />
    </>
  )
}

export default Foreground
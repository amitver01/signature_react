import React from 'react'
import SignaturePad  from 'react-signature-canvas';

function Foreground(props) {
  return (
    <>
    <SignaturePad penColor={props.colorr}
    backgroundColor={props.bg}
    canvasProps={{width: 1100,  height: 600, border:'4px solid white',className: 'sigCanvas'}} />
    </>
  )
}

export default Foreground
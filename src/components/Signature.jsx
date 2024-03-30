
import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import Buttons from './Buttons';

const Signature = () => {
  const signatureCanvas = useRef();

  const clearSignature = () => {
    signatureCanvas.current.clear();
  };
  const downloadSignature = () => {
    const dataURL = signatureCanvas.current.toDataURL();
    const downloadLink = document.createElement('a');
    downloadLink.href = dataURL;
    downloadLink.download = 'signature.png'; // You can change the filename if needed
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  const penColor = (e) => {
       setpenCol(e.target.value);
  }
  const handleColorChange = (e) => {
    setCanvasColor(e.target.value);
  };
  const penTHICKNESS = (e) => {
    setPenThick(parseInt(e.target.value));
  }
  const [penCo , setpenCol]=useState("BLACK");
  const [canvasColor, setCanvasColor] = useState('white');
  const [penThick , setPenThick]=useState(5)
  return (
    <>
    <div className='flex justify-center gap-5'>
    <input type="color" value={canvasColor} placeholder='PENCOLOR' onChange={handleColorChange} /> CANVAS-COLOR
  
      <SignatureCanvas
        ref={signatureCanvas}
        penColor={penCo}
        canvasProps={{ width: 900, height: 550, className: 'signature-canvas',minWidth: 1, maxWidth: 3, style: { backgroundColor: canvasColor } }}
        minWidth={penThick}
      />
      <input type='color' value={penCo} onChange={penColor}/> . PEN-COLOR
      </div>
      <div className='p-3 flex justify-center gap-10'>
      <input type="range" min="1" max="10" value={penThick} onChange={penTHICKNESS}/>
        <Buttons  onClick={clearSignature} text={'clear'} />
        <Buttons  text={'@ download'}  onClick={downloadSignature}/>
       
      
      </div>
      </>
  );
};

export default Signature;

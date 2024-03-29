
import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import Buttons from './Buttons';

const Signature = () => {
  const signatureCanvas = useRef();

  const clearSignature = () => {
    signatureCanvas.current.clear();
  };

  const saveSignature = () => {
    const signatureData = signatureCanvas.current.toDataURL();
    console.log(signatureData); // You can send this data to your server or use it as needed
  };

  return (
    <>
    <div className='flex justify-center'>
      <SignatureCanvas
        ref={signatureCanvas}
        canvasProps={{ width: 800, height: 600, className: 'signature-canvas' }}
      />
      </div>
      <div className='p-4 gap-2'>
        <Buttons text={'clear'} onClick={clearSignature}/>
        <Buttons text={'save @ download'}  onClick={saveSignature}/>
      </div>
      </>
  );
};

export default Signature;

import React from 'react'

function Buttons(props) {
  return (
    <>
    <button className='bg-blue-700 text-black font-bold py-2 px-4 rounded' onClick={props.onClick}> 
      {props.text}
    </button>
    </>
  )
}

export default Buttons
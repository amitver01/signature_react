import { useState } from 'react'
import Buttons from './components/Buttons'
import Foreground from './components/Foreground'


function App() {
  const[sign , setSign] = useState();
  return (
    <>
     <h2>DIGITAL SIGNATURE</h2>
     <div className='p-4 flex items-center'>
      <Buttons/>
     </div>
     <Foreground/>
    <div className='p-1'>Thank you</div>

    </>
  )
}

export default App

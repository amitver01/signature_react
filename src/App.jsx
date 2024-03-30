
import React from 'react';
import './App.css';
import Signature from './components/Signature';

function App() {
  return (
    <div className="App overflow-hidden bg-blue-gray-300">
      <h1 className="text-3xl font-bold text-zinc-700 m-3 p-5">Signature App</h1>
     <div className='m-1'> <Signature /> </div>
    </div>
  );
}

export default App;


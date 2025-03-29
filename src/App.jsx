import { useState } from 'react';
import MatrixRainingCode from './components/MatrixRainingCode';
import './App.css';
import './Cursors.css';

function App() {
  return (
    <>
    <div style={{ position: 'absolute', width: '100vw', height: '100vh', zIndex: '-1'}}>
    <MatrixRainingCode/>
    <button className="z-1 custom-green text-white font-bold py-2 px-4 rounded">Hello</button>
    </div>
    </>
  );
}

export default App;

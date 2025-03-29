import { useState } from 'react';
import './App.css';
import './Cursors.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className=" flex text-white flex-col min-h-screen justify-between">
        <Navbar />
        <div className='flex justify-center items-center'>
        <button className="flex z-1 custom-green text-white font-bold py-2 px-4 rounded">Hello</button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

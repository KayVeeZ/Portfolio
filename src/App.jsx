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
        <div className='flex justify-center items-center custom-green'>
          <p className="text-6xl">👋</p>
        <button className="flex z-1 custom-green-bg text-white font-bold py-2 px-4 rounded">Hello</button><p className="text-6xl">I'm KSHITIJ.</p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

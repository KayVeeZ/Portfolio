import { useState, useEffect } from 'react';
import './App.css';
import './Cursors.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300); // Small delay for smooth effect
  }, []);

  return (
    <div
      className={`flex flex-col min-h-screen justify-between text-white transition-all duration-700 ease-in ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Navbar fades in */}
      <Navbar />

      {/* Main content fades in */}
      <div className="flex-grow flex justify-center items-center custom-green">
        <p className="text-6xl">👋</p>
        <button className="flex z-1 custom-green-bg text-white font-bold py-2 px-4 rounded">
          Hello
        </button>
        <p className="text-6xl">I'm KSHITIJ.</p>
      </div>

      {/* Footer fades in */}
      <Footer />
    </div>
  );
}

export default App;

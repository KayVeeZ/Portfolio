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
      className={`flex flex-col min-h-screen justify-between text-white transition-all duration-700 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Navbar fades in */}
      <Navbar />

      {/* Main content fades in */}
      <div className="flex-grow flex flex-col justify-center items-center custom-green space-y-6">
        <div className="flex space-x-4">
          <p className="text-6xl">👋</p>
          <button className="text-6xl custom-green-bg text-white font-bold py-2 px-4 rounded">
            I'm
          </button>
          <p className="text-6xl custom-outline-white">KSHITIJ</p>
          <p className="text-white text-6xl custom-outline-green">VASHISTH</p>
          <p className="text-amber-500 text-6xl custom-outline-white">!</p>
        </div>

        <div class="slide-in-fade">
          <span className='curZur color-switch'>Hire Me</span>
        </div>

        <div className="slide-in-fade">
         <span className="curZur">Aloo Kanda</span>
        </div>

      </div>

      {/* Footer fades in */}
      <Footer />
    </div>
  );
}

export default App;

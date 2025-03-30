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
        <div className="text-6xl flex space-x-4">
          <p>👋</p>
          <div className="custom-green-bg text-white px-4 rounded">
            I'M
          </div>
          <p className="custom-outline-white font-bold">KSHITIJ</p>
          <p className="text-white custom-outline-green font-bold">VASHISTH</p>
          <p className="text-amber-500 custom-outline-white">!</p>
        </div>

        <div class="slide-in-fade text-2xl font-bold uppercase">
          <span className='curZur color-switch'>Hire Me</span>
        </div>

        <div className="slide-in-fade text-2xl font-semibold">
         <span className="curZur">Test Button</span>
        </div>

      </div>

      {/* Footer fades in */}
      <Footer />
    </div>
  );
}

export default App;

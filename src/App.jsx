import { useState, useEffect } from 'react';
import './App.css';
import './Cursors.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Headline from './components/Headline';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300); // Small delay for smooth effect
  }, []);

  return (
    <div
      className={`font-custom flex flex-col min-h-screen justify-between text-white transition-all duration-700 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Navbar fades in */}
      <Navbar />

      {/* Main content fades in */}
      <div className="flex-grow flex flex-col justify-center items-center custom-green select-none">
        <Headline />
        <Intro />
      </div>

      {/* Footer fades in */}
      <Footer className="w-full flex justify-center" />

    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import './App.css';
import './Cursors.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Headline from './components/Headline';
import Projects from './components/Projects';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300); // Small delay for smooth effect
  }, []);

  return (
    <div
      className={`font-custom flex flex-col min-h-screen justify-between text-white transition-all duration-700 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <section className='flex flex-col min-h-[100vh]'>
      {/* Navbar fades in */}
      <Navbar className="fixed top-10"/>

      {/* Main content fades in */}
      <div className="flex-grow flex flex-col justify-center items-center custom-green select-none">
        <Headline />
        <Intro />
      </div>
      </section>
      <section className='bg-red-700 min-h-[100vh]'>
        <Projects/>
      </section>
      {/* Footer fades in */}
      <Footer className="w-full flex justify-center" />

    </div>
  );
}

export default App;

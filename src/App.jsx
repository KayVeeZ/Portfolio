import { useState, useEffect } from 'react';
import './App.css';
import './Cursors.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Headline from './components/Headline';
import Projects from './components/Projects';
import BrainCanvas from './components/BrainCanvas';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024); // Checking if the screen is larger than 1024px

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300); // Small delay for smooth effect

    // Resize listener
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024); // Adjust the condition if needed
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  return (
    <div
      className={`font-custom flex flex-col min-h-screen justify-between text-white transition-all duration-700 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Navbar */}
      <Navbar className="fixed top-10" />

      {/* Main Section */}
      <section className="min-h-[100vh] flex">
        {/* Left column with Headline and Intro */}
        <div className={`flex-grow flex flex-col justify-center items-center custom-green select-none ${isDesktop ? 'ml-[5.5vw]' : 'mb-10'}`}>
          <Headline />
          <Intro />
        </div>

        {/* Right column with BrainCanvas (Only on Desktop) */}
        {isDesktop && (
          <div className=" rounded-3xl translucent-container mt-20 mb-20 ml-8 flex-grow flex flex-col justify-center items-center custom-green select-none mr-[5.5vw]">
            <BrainCanvas />
          </div>
        )}
      </section>

      {/* Projects Section */}
      <section className="bg-red-700 min-h-[100vh]">
        <Projects />
      </section>

      {/* Footer */}
      <Footer className="w-full flex justify-center" />
    </div>
  );
}

export default App;

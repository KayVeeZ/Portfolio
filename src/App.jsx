import { useState, useEffect } from 'react';
import './App.css';
import './Cursors.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Headline from './components/Headline';
import Projects from './components/Projects';
import BrainCanvas from './components/BrainCanvas';
import StreamerText from './components/StreamerText';

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
      className={`select-none font-custom flex flex-col min-h-screen justify-between text-white transition-all duration-700 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="flex flex-col justify-center items-center">
      {/* Navbar */}
      <Navbar />
      <StreamerText texts={["Hello","*", "Welcome","*", "React","*", "Streamer!"]} direction={1} />
      <StreamerText texts={["Reverse","*", "Scrolling","*", "Effect!"]} direction={-1} />
      </div>
      

      {/* Main Section */}
      <section className="mt-[10vh] flex h-auto items-center">
        {/* Left column with Headline and Intro */}
        <div className={`flex-grow flex flex-col justify-center items-center custom-green ${isDesktop ? 'ml-[5.5vw]' : 'mb-10'}`}>
          <Headline />
          <Intro />
        </div>
        
      
        {/* Right column with BrainCanvas (Only on Desktop) */}
        {isDesktop && (
          <div className="h-[50vh] rounded-3xl translucent-container mt-10 mb-5 ml-8 flex-grow flex flex-col justify-center items-center custom-green select-none mr-[5.5vw]">
            <BrainCanvas />
          </div>
          
        )}
        
      </section>
        
      {/* Projects Section */}
      <section className="h-auto flex items-center justify-center">
        

        <Projects className="curZur"/>
      </section>

      {/* Footer */}
      <Footer className="w-full flex justify-center" />
    </div>
  );
}

export default App;

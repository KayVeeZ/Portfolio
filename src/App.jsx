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
      className={`font-custom flex flex-col min-h-screen justify-between text-white transition-all duration-700 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Navbar fades in */}
      <Navbar />

      {/* Main content fades in */}
      <div className="flex-grow flex flex-col justify-center items-center custom-green space-y-6 select-none">
        <div className="text-6xl flex space-x-4">
          <p>👋</p>
          <div className="custom-green-bg text-white px-4 rounded font-bold">
            I'M
          </div>
          <p className="custom-outline-white">KSHITIJ</p>
          <p className="text-white custom-outline-green">VASHISTH</p>
          <p className="text-[#20C20E] custom-outline-white">!</p>
        </div>

        {/* Intro Card */}
        <div className="flex justify-center items-center w-full">
          {/* Card */}
          <div className="bg-black rounded-2xl shadow-lg overflow-hidden max-w-3xl p-6">
            <p className="text-xl text-left">
              Hi! I'm Kshitij Vashisth. A passionate Full-Stack Developer eager to build high-performance, scalable, and user-friendly web applications. Always excited to learn, adapt, and bring creative solutions to life! 🚀
            </p>

            {/* Centered "Hire Me" Button Inside the Card */}
            <div className="flex justify-center">
              <div className="slide-in-fade text-3xl font-extrabold uppercase">
                <span className="curZur color-switch">
                  <a
                    href="mailto:kshitijvashisth@gmail.com?subject=Let's%20collaborate%20on%20a%20project&body=Hello Mr. Kshitij Vashisth, I'm reaching out to you because..."
                    className="text-3xl font-extrabold uppercase"
                  >
                    Hire Me
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Footer fades in */}
      <Footer />
    </div>
  );
}

export default App;

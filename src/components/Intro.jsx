import React from 'react'
import HireMe from './HireMe'

const Intro = () => {
    return (
        <>
            {/* Intro Card */}
            <div className="flex justify-center items-center w-full">
                {/* Card */}
                <div className="bg-white/10 border border-white/10 rounded-2xl shadow-lg overflow-hidden max-w-3xl p-6 backdrop-blur-md">
                 
                    <p className="text-xl text-left">
                        Hi! I'm Kshitij Vashisth. A passionate Full-Stack Developer eager to build high-performance, scalable, and user-friendly web applications. Always excited to learn, adapt, and bring creative solutions to life! 🚀
                    </p>
                </div>
            </div>

            
            {/* Centered "Hire Me" Button Inside the Card */}
            <div className="flex justify-center">
                <HireMe />
            </div>
        </>
    )
}

export default Intro

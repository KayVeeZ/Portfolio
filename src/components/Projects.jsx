import React from 'react';
import Slider from 'react-slick';
import '../ProjectCarousel.css'

import project2 from "../assets/projectImages/kvzCareers.png";
import project1 from "../assets/projectImages/solarly.png";
import project3 from "../assets/projectImages/gitUploadAutomation.png";
import project4 from "../assets/projectImages/blockSnake.png";
import { Center } from '@react-three/drei';


const projects = [
  {
    title: "Project One",
    description: "Description of project one.",
    image: project1,
  },
  {
    title: "Project Two",
    description: "Description of project two.",
    image: project2,
  },
  {
    title: "Project Three",
    description: "Description of project three.",
    image: project3,
  },
  {
    title: "Project Four",
    description: "Description of project four.",
    image: project4,
  },

];

const Projects = () => {
  const settings = {
    dots: true,              // Enable navigation dots
    infinite: true,          // Infinite scrolling
    speed: 500,              // Transition speed
    slidesToShow: 1,         // Show one slide at a time
    slidesToScroll: 1,       // Scroll one slide at a time
    autoplay: true,          // Auto-scroll
    autoplaySpeed: 3000,     // Speed of auto-scroll (in milliseconds)
    pauseOnHover: true,      // Pause on hover
    arrows: true,            // Show next/prev arrows
  };

  return (
    <div className="projects-container">
      <div className='text-center'>
        <h2 className="inline-block text-3xl font-bold mb-8 custom-green bg-black px-4 py-2">
          My Projects
        </h2>
      </div>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="project-slide rounded-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              style={{ width: '80%', height: '100%', objectFit: 'contain', marginLeft: '10%', marginRight: '10%' }}
            />
            <div className="project-info">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;

import React from 'react';
import Slider from 'react-slick';


const projects = [
  {
    title: "Project One",
    description: "Description of project one.",
    image: "/path/to/image1.jpg",
  },
  {
    title: "Project Two",
    description: "Description of project two.",
    image: "/path/to/image2.jpg",
  },
  {
    title: "Project Three",
    description: "Description of project three.",
    image: "/path/to/image3.jpg",
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
      <h2 className="text-center text-3xl font-bold mb-8">My Projects</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="project-slide">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
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

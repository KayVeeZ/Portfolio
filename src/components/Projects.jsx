import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../ProjectCarousel.css';

import project1 from "../assets/projectImages/solarly.png";
import project2 from "../assets/projectImages/kvzCareers.png";
import project3 from "../assets/projectImages/gitUploadAutomation.png";
import project4 from "../assets/projectImages/blockSnake.png";

const projects = [
  { title: "Solarly", description: "Description of project one. This project is about...", image: project1, link: "https://example.com/project1" },
  { title: "KVZCareers", description: "Description of project two. It focuses on...", image: project2, link: "https://example.com/project2" },
  { title: "Git Automation", description: "Description of project three. The main feature is...", image: project3, link: "https://example.com/project3" },
  { title: "BlockSnake", description: "Description of project four. It was built using...", image: project4, link: "https://example.com/project4" },
];

const Projects = () => {
  const sliderRef = useRef(null);
  const modalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isHovered) {
        e.preventDefault();
      }
    };

    if (isHovered) {
      window.addEventListener("wheel", handleWheel, { passive: false });
    } else {
      window.removeEventListener("wheel", handleWheel);
    }

    return () => window.removeEventListener("wheel", handleWheel);
  }, [isHovered]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "40px" } },
      { breakpoint: 600, settings: { slidesToShow: 1, centerPadding: "20px" } },
    ],
  };

  return (
    <div
      className="projects-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onWheel={(e) => {
        if (isHovered) {
          if (sliderRef.current) {
            if (e.deltaY < 0) {
              sliderRef.current.slickPrev();
            } else {
              sliderRef.current.slickNext();
            }
          }
        }
      }}
    >
      <div className='text-center'>
        <h2 className="inline-block text-3xl font-bold mb-8 custom-green bg-black px-4 py-2">
          My Projects
        </h2>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {projects.map((project, index) => {
          const isActive = selectedProject === project;
          return (
            <div key={index} className="project-slide rounded-2xl" onClick={() => setSelectedProject(project)}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-info text-center p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {isActive && <p className="text-gray-300">{project.description}</p>}
              </div>
            </div>
          );
        })}
      </Slider>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content expanded bg-black custom-green p-6 max-w-2xl mx-auto rounded-lg shadow-lg overflow-auto max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
            onWheel={(e) => e.stopPropagation()} // Prevent background scroll
          >
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image w-full h-auto rounded-lg" />
            <h3 className="text-3xl font-bold mt-4">{selectedProject.title}</h3>
            <p className="mt-2 text-lg">{selectedProject.description}</p>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-400 hover:underline">View Project</a><br />
            <button className="modal-close bg-red-600 text-white px-4 py-2 mt-6 rounded-lg hover:bg-red-800" onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
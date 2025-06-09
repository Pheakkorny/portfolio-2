import React, { useState } from 'react';
import './project.css';
import Project1 from '../../assets/project1.png';
import Project2 from '../../assets/project2.PNG';
import Project3 from '../../assets/project3.PNG';
import Project4 from '../../assets/project4.PNG';
import Project5 from '../../assets/project5.PNG';
import Project6 from '../../assets/project6.PNG';

const projectCards = [
  {
    image: Project1,
    title: 'School Management System',
    description: 'Full Stack Web that uses React, Node.js, Express, MySQL, and JWT.',
    url: 'https://github.com/Pheakkorny/School-Managment-System.git',
  },
  {
    image: Project2,
    title: 'POS System',
    description: 'Point of Sale system with Tailwind, Vite, and JWT authentication.',
    url: 'https://github.com/Pheakkorny/restaurant-management-system.git',
  },
  {
    image: Project3,
    title: 'Responsive Coffee Website',
    description: 'Static site built with HTML, CSS, and JavaScript.',
    url: 'https://github.com/Pheakkorny/responsive-coffee-website.git',
  },
  {
    image: Project4,
    title: 'Portfolio Website (HTML)',
    description: 'Personal portfolio using HTML, CSS, and JavaScript.',
    url: 'https://github.com/Pheakkorny/portfolio.git',
  },
  {
    image: Project5,
    title: 'Portfolio Website (React)',
    description: 'Portfolio built with React.js.',
    url: 'https://github.com/Pheakkorny/portfolio-2.git',
  },
  {
    image: Project6,
    title: 'Social Links Web',
    description: 'Simple React app for linking social profiles.',
    url: 'https://github.com/Pheakkorny/social-links.git',
  },
];

const Project = () => {
  const [showAllProject, setShowAllProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // project to confirm

  const visibleProject = showAllProject ? projectCards : projectCards.slice(0, 3);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleConfirm = () => {
    if (selectedProject) {
      window.open(selectedProject.url, '_blank');
      setSelectedProject(null);
    }
  };

  const handleCancel = () => {
    setSelectedProject(null);
  };

  return (
    <section id='project'>
      <h2 className='projectTitle'>My Project</h2>
      <span className='projectDesc'>
        Below is an overview of my hosting website and the project I’ve successfully completed and developing. Here is my project details resources.
      </span>
      <div className='projectCards'>
        {visibleProject.map((card, index) => (
          <div className='card' key={index} onClick={() => handleCardClick(card)} style={{ cursor: 'pointer' }}>
            <img src={card.image} alt={card.title} className='cardImage' />
            <h3 className='cardTitles'>{card.title}</h3>
            <p className='cardDesc'>{card.description}</p>
          </div>
        ))}
      </div>

      <button className='projectBtn' onClick={() => setShowAllProject(!showAllProject)}>
        {showAllProject ? 'Show Less' : 'See More'}
      </button>

      {/* Confirmation Bar */}
      {selectedProject && (
        <div className='confirmBar'>
          <p className='txtq'>Do you want to view details about <strong>{selectedProject.title}</strong> project ?</p>
          <button onClick={handleConfirm}>Yes</button>
          <button onClick={handleCancel}>No</button>
        </div>
      )}
    </section>
  );
};

export default Project;

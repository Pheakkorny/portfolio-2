import React, { useState } from 'react';
import './works.css';
import Course1 from '../../assets/course1.PNG';
import Course2 from '../../assets/course2.jpg';
import Course3 from '../../assets/course3.PNG';
import Course4 from '../../assets/course4.PNG';
import Course5 from '../../assets/course5.PNG';
import Course6 from '../../assets/course6.PNG';
import EducationImg from '../../assets/educationImg.jpg';

const courseCards = [
  { image: Course1, title: 'OOP C# & SQL', description: 'The Object-Oriented Programming with C#, Microsoft SQL Server.' },
  { image: Course2, title: 'Full Stack React Node Express MySQL', description: 'Completed course at NIT Cambodia teaching by Professor Dy Vannak.' },
  { image: Course3, title: 'AWS Academy Data Engineering', description: 'AWS Academy Graduate - AWS Academy Data Engineering.' },
  { image: Course4, title: 'Machine Learning Foundations', description: 'AWS Academy Graduate - AWS Academy Machine Learning Foundations.' },
  { image: Course5, title: 'AWS Academy Cloud Architecting', description: 'AWS Academy Graduate - AWS Academy Cloud Architecting.' },
  { image: Course6, title: 'AWS Academy Cloud Foundations', description: 'AWS Academy Graduate - AWS Academy Cloud Foundations.' },
];

const Works = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);

  const visibleCourses = showAllCourses ? courseCards : courseCards.slice(0, 3);

  return (
    <section id='works'>
      <h2 className='worksTitle'>Education & Completed Courses</h2>
      <span className='worksDesc'>
        Below is an overview of my academic background and the courses I’ve successfully completed. I hold a Bachelor's degree in Computer Science from the Royal University of Phnom Penh, which laid the foundation for my continued learning and professional development.
      </span>

      {/* Education Card */}
      <div className='educationCard'>
        <div className='educationContent'>
          <img src={EducationImg} alt='Graduation' className='educationImage' />
          <div className='educationText'>
            <h3 className='cardTitle'><strong>Bachelor of Computer Science</strong></h3>
            <p className='cardYears'><strong>2021 – 2025</strong></p>
            <p className='cardDesc'>
              Graduated from the Royal University of Phnom Penh, where I studied software development, algorithms, and system architecture while engaging in team projects and practical research.
            </p>
          </div>
        </div>
      </div>

      {/* Courses */}
      <div className='worksCards'>
        {visibleCourses.map((card, index) => (
          <div className='card' key={index}>
            <img src={card.image} alt={card.title} className='cardImage' />
            <h3 className='cardTitles'>{card.title}</h3>
            <p className='cardDesc'>{card.description}</p>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <button className='worksBtn' onClick={() => setShowAllCourses(!showAllCourses)}>
        {showAllCourses ? 'Show Less' : 'See More'}
      </button>
    </section>
  );
};

export default Works;

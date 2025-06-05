import React from 'react';
import './About.css';
import Photo from '../../../Image/MyPhoto.png';

const About = () => {
  return (
    <section className='AboutPage'>
      <div className="about-img">
        <img src={Photo} alt="Profile" />
      </div>

      <div className="about-details">
        <div className="about-item">
          <h3>Name</h3>
          <p>Kesava Perumal G</p>
        </div>

        <div className="about-item">
          <h3>Qualification</h3>
          <p>B.Sc Computer Science</p>
        </div>

        <div className="about-item">
          <h3>Finishing Batch Year</h3>
          <p>2021 - 2024</p>
        </div>

        <div className="about-item">
          <h3>Interests</h3>
          <p>Front-end Development, UI/UX Design, Responsive Web Design, JavaScript Animation</p>
        </div>

        <div className="about-item">
          <h3>Current Work</h3>
          <p>Practicing ReactJS projects and learning advanced front-end frameworks. Working on a personal portfolio and contributing to open source.</p>
        </div>

        <div className="about-item">
          <h3>Soft Skills</h3>
          <p>Problem Solving, Team Collaboration, Communication, Time Management</p>
        </div>

        <div className="about-item">
          <h3>Tools/Technologies</h3>
          <p>VS Code, GitHub, Figma, Netlify, Chrome DevTools</p>
        </div>
      </div>
    </section>
  );
};

export default About;

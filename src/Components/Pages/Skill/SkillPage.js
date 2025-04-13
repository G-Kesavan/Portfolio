import React, { useState } from 'react';
import './SkillPage.css';
import { CircularProgressBar } from "react-percentage-bar";

const skillDetails = {
  HTML: {
    percentage: 69,
    description: 'HTML (HyperText Markup Language) is used to structure a web page and its content.',
  },
  CSS: {
    percentage: 50,
    description: 'CSS (Cascading Style Sheets) describes how HTML elements are to be displayed on screen.',
  },
  JavaScript: {
    percentage: 85,
    description: 'JavaScript is a versatile programming language used for adding interactivity to websites.',
  },
  ReactJS: {
    percentage: 75,
    description: 'ReactJS is a JavaScript library for building user interfaces using components.',
  },
  GitHub: {
    percentage: 65,
    description: 'GitHub is a platform for version control and collaboration based on Git.',
  },
  SQL: {
    percentage: 60,
    description: 'SQL is a domain-specific language used in programming for managing data in databases.',
  },
  MongoDB: {
    percentage: 70,
    description: 'MongoDB is a NoSQL database program that uses JSON-like documents with optional schemas.',
  },
  Mongoose: {
    percentage: 68,
    description: 'Mongoose is an ODM library for MongoDB and Node.js that manages relationships and validation.',
  },
};

const Skill = () => {
  const [currentSkill, setCurrentSkill] = useState('HTML');

  const handleSkillChange = (skill) => {
    setCurrentSkill(skill);
  };

  const { percentage, description } = skillDetails[currentSkill];

  return (
    <section className='Skill-Section'>
      <div className='AboutSkill'>
        <h1>{currentSkill}</h1>
        <CircularProgressBar
          key={percentage} 
          percentage={percentage}
          color="#c6c1c1bd"
          trackColor='#3e3a3abe'
        />
        <p>{description}</p>
      </div>
      <div className='MySkills'>
        <ul>
          {Object.keys(skillDetails).map(skill => (
            <li key={skill} onClick={() => handleSkillChange(skill)}>{skill.toUpperCase()}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skill;

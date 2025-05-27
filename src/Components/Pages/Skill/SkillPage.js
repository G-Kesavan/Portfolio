import React, { useState } from 'react';
import './SkillPage.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IoLogoHtml5 ,IoLogoCss3,IoLogoJavascript,IoLogoReact,IoLogoGithub} from "react-icons/io5";
import { SiMongodb,SiMongoose,SiOracle} from "react-icons/si";



const skillDetails = {
  HTML: {
    icon:<IoLogoHtml5 />,
    percentage: 81,
    description: 'HTML (HyperText Markup Language) is used to structure a web page and its content.',
  },
  CSS: {
    icon:<IoLogoCss3 />,
    percentage: 75,
    description: 'CSS (Cascading Style Sheets) describes how HTML elements are to be displayed on screen.',
  },
  JavaScript: {
    icon:<IoLogoJavascript />,
    percentage: 68,
    description: 'JavaScript is a versatile programming language used for adding interactivity to websites.',
  },
  ReactJS: {
    icon:<IoLogoReact />,
    percentage: 65,
    description: 'ReactJS is a JavaScript library for building user interfaces using components.',
  },
  GitHub: {
    icon:<IoLogoGithub />,
    percentage: 65,
    description: 'GitHub is a platform for version control and collaboration based on Git.',
  },
  SQL: {
    icon:<SiOracle />,
    percentage: 60,
    description: 'SQL is a domain-specific language used in programming for managing data in databases.',
  },
  MongoDB: {
    icon:<SiMongodb />,
    percentage: 63,
    description: 'MongoDB is a NoSQL database program that uses JSON-like documents with optional schemas.',
  },
  Mongoose: {
    icon:<SiMongoose />,
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
    <section className='SkillPage'>
      <div className='AboutSkill'>
        <h1>{currentSkill}</h1>
        <div className='skill-bar'>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathColor: `rgba(36, 35, 35,0.6)`,
              textColor: 'white',
              trailColor: 'white',
              textSize: '16px',
              pathTransitionDuration: 0.8,
            })}
          />
        </div>
        <p>{description}</p>
      </div>
      <div className='MySkills'>
        <ul>
          {Object.keys(skillDetails).map(skill => {
          const { icon } = skillDetails[skill];
          return (
            <li key={skill} onClick={() => handleSkillChange(skill)}>
              <div className='icon-con'>{icon}</div>
              <h3>{skill.toUpperCase()}</h3>
            </li>
          );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skill;

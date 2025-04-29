import React, { useState } from 'react';
import './Experience.css'

const Experience = () => {
  const content = [
    { key: 1, value: "apple1" },
    { key: 2, value: "apple2" },
    { key: 3, value: "apple3" },
    { key: 4, value: "apple4" },
    { key: 5, value: "apple5" },
    { key: 6, value: "apple6" },
    { key: 7, value: "apple7" }
  ];

  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    if (startIndex + 3 < content.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const previous = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const element = content.slice(startIndex, startIndex + 3);

  return (
    <section className='box'>
      <button className='btn1' style={{color:'black'}} onClick={previous}>previous</button>
      
      {element.map((variable) => (
        <div key={variable.key} className='content'>{variable.value}</div>
      ))}

      <button className='btn2' style={{color:'black'}} onClick={next}>next</button>
    </section>
  );
};

export default Experience;

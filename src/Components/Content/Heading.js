import React from 'react'
import resume from '../../Image/resum.pdf'

const Heading = () => {

  const onButtonClick = () => {
    const pdfUrl = "../resum.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <section className='heading'>
        <div className='message'>
          <h2>Welcome to my portfolio</h2>
          <h5>Excited to share my journey...</h5>
        </div>
        <div className='resume'>
          <ul>
            <li onClick={onButtonClick}>Resume</li>
            <li>CV</li>
          </ul>
        </div>
    </section>
  )
}

export default Heading
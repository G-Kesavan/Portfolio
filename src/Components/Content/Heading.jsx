import React from 'react'
import {  GiEyeTarget } from 'react-icons/gi';
import { IoMdDownload  } from "react-icons/io";

const Heading = () => {

  const DoButtonClick = () => {
    const pdfUrl = "https://drive.google.com/uc?export=download&id=1HOjJ7i7-Hz_bMGF32cP99oqJDicO6ubb";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "kESAVAN.PDF";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const ViButtonClick = () => {
  const pdfUrl = "https://drive.google.com/file/d/1HOjJ7i7-Hz_bMGF32cP99oqJDicO6ubb/view?usp=drive_link";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "kESAVAN.PDF";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section className='heading'>
        <div className='message'>
          <h2>Welcome to my portfolio</h2>
          <marquee>Excited to share my journey...</marquee>
        </div>
        <div className='resume'>
          <ul>
            <li >RESUME</li>
            <li onClick={ViButtonClick}><p className='resum-text'>VIEW&nbsp;</p><GiEyeTarget fontSize='18px'/></li>
            <li onClick={DoButtonClick}><p className='resum-text'>DOWNLOAD&nbsp;</p><IoMdDownload fontSize='18px' /></li>
          </ul>
        </div>
    </section>
  )
}

export default Heading
import React from 'react'
import certificate_1 from '../../../Image/background.jpg'
import './Certificate.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "@ant-design/react-slick";

const Certificate = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  
  const certificates=[
    {
      image:certificate_1,
      detail:'it provide codsoft IT tech enterstry of oracle cloud enterstry of managment of kolkatha'
    },
    {
      image:certificate_1,
      detail:'it provide codsoft IT tech enterstry of oracle cloud enterstry of managment of kolkatha'
    },
    {
      image:certificate_1,
      detail:'it provide codsoft IT tech enterstry of oracle cloud enterstry of managment of kolkatha'
    },
    {
      image:certificate_1,
      detail:'it provide codsoft IT tech enterstry of oracle cloud enterstry of managment of kolkatha'
    },
    {
      image:certificate_1,
      detail:'it provide codsoft IT tech enterstry of oracle cloud enterstry of managment of kolkatha'
    },
    {
      image:certificate_1,
      detail:'it provide codsoft IT tech enterstry of oracle cloud enterstry of managment of kolkatha'
    },
    {
      image:certificate_1,
      detail:'it provide codsoft IT tech enterstry of oracle cloud enterstry of managment of kolkatha'
    }
  ];
  return (
    <section className='certification'>
      <Slider {...settings}>
      {certificates.map((certificate)=>(
        <div className='certificate'>
          <img src={certificate.image}/>
          <div className='datials'>
          <p>name</p>
          <p>{certificate.detail}</p>
          </div>
        </div>
      ))}
      </Slider>
    </section>
  )
}

export default Certificate
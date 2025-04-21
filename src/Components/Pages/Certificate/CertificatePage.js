import React from 'react'
import certificate_1 from '../../../Image/background.jpg'
import './Certificate.css'

const Certificate = () => {
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
      {certificates.map((certificate)=>(
        <div className='certificate'>
          <img src={certificate.image}/>
          <p>{certificate.detail}</p>
        </div>
      ))}
    </section>
  )
}

export default Certificate
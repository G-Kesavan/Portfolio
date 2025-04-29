import React from 'react'
import certificate_1 from '../../../Image/Web Development.jpg'
import certificate_3 from '../../../Image/AI Foundations Associate-1.jpg'
import certificate_4 from '../../../Image/Foundations Associate-1.jpg'
import certificate_5 from '../../../Image/Software Testing-1.jpg'
import certificate_2 from '../../../Image/WORKSHOP PARTICIPATION CERTIFICATE-1.jpg'
import './Certificate.css'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Certificate = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
  
  const certificates=[
    {
      key:1,
      name:'CodSoft Intership Web Development',
      provider:'CodSoft',
      image:certificate_1,
      detail:'it provide codsoft IT tech enterstry of oracle cloud enterstry of managment of kolkatha'
    },
    {
      key:2,
      name:'WORKSHOP PARTICIPATION',
      provider:'GUHA',
      image:certificate_2,
      detail:'it provide codsoft IT tech enterstry of oracle cloud enterstry of managment of kolkatha'
    },
    {
      key:3,
      name:'AI Foundations Associate',
      provider:'Oracle',
      image:certificate_3,
      detail:'it provide codsoft IT tech enterstry of oracle cloud enterstry of managment of kolkatha'
    },
    {
      key:4,
      name:'Foundations Associate',
      provider:'Oracle',
      image:certificate_4,
      detail:'it provide codsoft IT tech enterstry of oracle cloud enterstry of managment of kolkatha'
    },
    {
      key:5,
      name:'Software Testing',
      provider:'Open Monitor',
      image:certificate_5,
      detail:'it provide codsoft IT tech enterstry of oracle cloud enterstry of managment of kolkatha'
    }
  ];
  return (
    <section className="CertificatePage embla" ref={emblaRef}>
    <div className="certificates">
      {certificates.map((certificate)=>(
        <div className="certificate" key={certificate.key}>
          <img src={certificate.image} alt='certificate'/>
          <div className='datials'>
          <h2>{certificate.name}</h2>
          <h3>Provider :{certificate.provider}</h3>
          <p>{certificate.detail}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
  )
}

export default Certificate
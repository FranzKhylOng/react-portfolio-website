import React from 'react'
import Resume from '../../assets/Resume.pdf'
import Fade from 'react-reveal/Fade';

const CTA = () => {
  return (
    <div className='cta'>
      <Fade left>
        <a href={Resume} download className='btn'>Resume</a>
        </Fade>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA 

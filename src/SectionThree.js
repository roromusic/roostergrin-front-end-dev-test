import React from 'react';
import './SectionThree.css';
import ScrollAnimation from 'react-animate-on-scroll';

import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';

const SectionThree = () => {
  return (
    <div className='section-three'>
      <h1 className='section-three-h1'>
        <span className='app-h1-orange'>LOREM</span> <span className='app-h1-black'>IPSUM</span>
      </h1>
      <ScrollAnimation animateIn='slideInLeft' animateOnce={true}>
      <div className='section-three-row section-three-row1'>
        
          <div className='section-three-column'>
            <div className='section-three-text'>
              <h2 className='section-three-h2'>Lorem ipsum dolor sit amet</h2>
              <h3 className='section-three-h3'>Lorem ipsum dolor sit amet lorem</h3>
              <p className='section-three-p app-p-text'>
                Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus. Purus libero amet, at dui, tincidunt nunc vestibulum in justo, a faucibus ipsum hendrerit semper ipsum. Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus. Purus libero amet, at dui, tincidunt nunc vestibulum in justo, a faucibus ipsum hendrerit semper ipsum ac.
              </p>
            </div>
          </div>
          <div className='section-three-img section-three-img1 section-three-column'>
            <img src={img1} alt='image1' />
          </div>
        
      </div>
      < /ScrollAnimation>
      <ScrollAnimation animateIn='slideInRight' animateOnce={true}>
        <div className='section-three-row section-three-row2'>
          <div className='section-three-img section-three-img2 section-three-column'>
            <img src={img2} alt='image2' />
          </div>
          <div className='section-three-column'>
            <div className='section-three-text'>
              <h2 className='section-three-h2'>Lorem ipsum dolor sit amet</h2>
              <h3 className='section-three-h3'>Lorem ipsum dolor sit amet lorem</h3>
              <p className='section-three-p app-p-text'>
                Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus. Purus libero amet, at dui, tincidunt nunc vestibulum in justo, a faucibus ipsum hendrerit semper ipsum. Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus. Purus libero amet, at dui, tincidunt nunc vestibulum in justo, a faucibus ipsum hendrerit semper ipsum ac.
              </p>
            </div>
          
          </div>
        
        
      </div>
      < /ScrollAnimation>
    </div>
  );
};

export default SectionThree;
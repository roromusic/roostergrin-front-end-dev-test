import React from 'react';
import './SectionTwo.css';
import ScrollAnimation from 'react-animate-on-scroll';

const SectionTwo = () => {
  return (
    <div className='section-two app-grid'>
      <h1 className='section-two-h1'>
        <span className='app-h1-orange'>LOREM</span> <span className='app-h1-black'>IPSUM</span>
      </h1>
      <div className='section-two-p-b'>
        <p className='section-two-p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <div className='section-two-b'>
          <button className='app-button'>Button</button>
        </div>
      </div>
      <div className='section-two-numbers'>
        <div className='section-two-n-p'>
          <ScrollAnimation animateIn='shake' initiallyVisible={true} animateOnce={true}>
            <div className='section-two-number'>
              240%
            </div>
          </ScrollAnimation>
          <div className='section-two-number-p'>
            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor</p>
          </div>
        </div>
        <div className='section-two-n-p'>
          <ScrollAnimation animateIn='shake' initiallyVisible={true} animateOnce={true}>
            <div className='section-two-number'>
              105%
            </div>
          </ScrollAnimation>
          <div className='section-two-number-p'>
            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor</p>
          </div>
        </div>
        <div className='section-two-n-p'>
          <ScrollAnimation animateIn='shake' initiallyVisible={true} animateOnce={true}>
            <div className='section-two-number'>
              159%
            </div>
          </ScrollAnimation>
          <div className='section-two-number-p'>
            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
import React from 'react';
import pageIcon from './img/page-icon.svg';
import './SectionOne.css';

const SectionOne = () => {
  return (
    <div className='section-one'>
      <div className='section-one-pages app-grid'>
        <div className='section-one-page'>
          <img className='section-one-page-icon' src={pageIcon} alt='page icon' />
          <p className='section-one-p app-p-text'>Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitate lectus cursus.</p>
        </div>
        <div className='section-one-page'>
          <img className='section-one-page-icon' src={pageIcon} alt='page icon' />
          <p className='section-one-p app-p-text'>Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitate lectus cursus.</p>
        </div>
        <div className='section-one-page'>
          <img className='section-one-page-icon' src={pageIcon} alt='page icon' />
          <p className='section-one-p app-p-text'>Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitate lectus cursus.</p>
        </div>
        <div className='section-one-page'>
          <img className='section-one-page-icon' src={pageIcon} alt='page icon' />
          <p className='section-one-p app-p-text'>Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitate lectus cursus.</p>
        </div>
      </div>
      <div className='section-one-gradient'>
        <p className='section-one-p-l app-grid'>
          Lorem ipsum dolor sit amet, ac dis arcu libero, pulvinar vitae lectus cursus. Purus libero amet, at dui, tincidunt nunc vestibulum in justo, a faucibus ipsum hendrerit semper ipsum ac.
        </p>
      </div>
    </div>
  );
}

export default SectionOne;
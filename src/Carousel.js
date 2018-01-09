import React, {Component} from 'react';
import './Carousel.css';
import Slider from 'react-slick';

import img1 from './img/hero-img.jpg';
import img2 from './img/iStock-503300108.jpg';
import img3 from './img/iStock-613672992.jpg';
import mail from './img/envelope-icon.svg';

class Carousel extends Component {
  render(props) {
    const settings = {
      dots: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    const {toggle} = this.props;
    
    return (
      <div className='carousel'>
        <Slider {...settings}>
          <div><img className='carousel-img' src={img1} alt='img1' /></div>
          <div><img className='carousel-img' src={img2} alt='img2'/></div>
          <div><img className='carousel-img' src={img3} alt='img3'/></div>
        </Slider>
        <div className='carousel-overlay'>
          <div className='carousel-content app-grid'>
            <h1 className='carousel-image-text'>Lorem Ipsum Lorem Ipsum</h1>
            <button className='carousel-button app-button'>Button</button>
          </div>
        </div>
        <div 
        className='carousel-fixed-email'
        onClick={() => toggle()}
        >
          <img src={mail} alt='email' />
        </div>
      </div>
    );
  }
}

export default Carousel;
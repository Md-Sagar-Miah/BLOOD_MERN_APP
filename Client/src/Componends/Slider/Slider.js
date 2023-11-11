import React  from 'react';
import Carousel from 'react-bootstrap/Carousel';
import im1 from './../../Images/resize-1677335595837450106u2nkbae0220606.jpg';
import im2 from './../../Images/tanishi_23_05_01.png';
import im3 from './../../Images/blood-types.jpg';
import './Slider.css';

function Slider() {


  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 vh-100"
          src={im1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im2}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider;

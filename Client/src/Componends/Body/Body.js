import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Img from './Img/istockphoto-627356286-170667a.jpg';
import Img2 from './Img/2961.png_860-removebg-preview.png';
import './Body.css';

function Body() {
  return (<>
       <Figure id='figure'>
      <Figure.Image id='figure-img'
        width={600}
        height={180}
        alt="Image"
        src={Img}
      />
      <Figure.Caption id='figure-caption'>
        <p>"Donate Blood"</p>
        <p>"Make a Difference"</p>
        <p>"Save a Life"</p>
      </Figure.Caption>
    </Figure>
    
    <Figure id='figure2'>
    <Figure.Caption id='figure-caption2'>
        <p>"Give the gift of life to others"</p>
        <p>"Donating blood can make a big difference"</p>
        {/* <p>"Take care of yourself, eat well, and donate blood"</p> */}
      </Figure.Caption>

      <Figure.Image id='figure2-img'
        width={600}
        height={180}
        alt="Image"
        src={Img2}
      />
      
    </Figure>
    </>
  )
}

export default Body

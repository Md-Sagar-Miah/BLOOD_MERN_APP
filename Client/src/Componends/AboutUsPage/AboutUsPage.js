import React from 'react';
import './AboutUsPage.css';
import Header from '../Header/Header';
import Figure from 'react-bootstrap/Figure';
import Footer from '../Footer/Footer'
import image from './img/imgAboutBlood.jpg'

function AboutUsPage() {
  return (
    <>
      <Header />
      <div className='about-section'>
      
  
        <Figure id='figure'>
        <Figure.Caption id='figure-caption2'>
        <h1 >About Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam nostrum suscipit, soluta incidunt harum, sed illum similique voluptates quas saepe cumque minus veritatis laboriosam illo corrupti libero. Praesentium, laborum.</p>
      
          </Figure.Caption>

          <Figure.Image id='figure2-img'
            width={600}
            height={180}
            alt="Image"
            src={image}
          />
      
          </Figure>
      </div>
      <Footer />
    </>
  )
}

export default AboutUsPage;

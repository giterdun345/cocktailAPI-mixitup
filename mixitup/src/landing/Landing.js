import React from 'react';
import landingImg from './images/landing-img.jpg';
import Header from '../header/Header';

const Landing = ()=>{
  return(
    <div className='landing-container'>
      <img className="landing-img" src={landingImg} alt='splash of cubes in glasses'/>
      <Header />
      <section>
        Lorem Ipsum
      </section>
      
    </div>
  )
}

export default Landing;
import React, {useRef, useEffect} from 'react';
import LandingHero from './LandingHero';
import LandingContent from './LandingContent';

const Landing = ()=>{

  return(
    <div className='landing-container'>
     <LandingHero />
     <LandingContent />
    </div>
  )
}

export default Landing;
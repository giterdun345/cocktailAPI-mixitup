import React, {useRef, useEffect} from 'react';
import { Scrambler, Cycler } from "react-text-scrambler";

import landingImg from '../images/landing-img.jpg';
import Header from '../header/Header';

const Landing = ()=>{
const characters = "*"
const hOne = given =>(
  <span style={{color:"#f77f00ff"}}>{given.children}</span>
)   
  return(
    <div className='landing-container'>
      <img className="landing-img" src={landingImg} alt='splashing ice cubes in glasses'/>
      <Header />
        <section className="landing-over-img">
        <h1>
          <Scrambler text="Mix up your life with MixItUp" wrap={hOne} characters={characters}/>
        </h1>
        <p style={{textIndent:"6vw"}}>Want some new ingredients to try?</p>
          <p style={{textIndent:"6vw"}}> Want to explore different tastes?</p>
          <p style={{fontSize:"1.5vw"}}>Uses an open, crowd-sourced database from 
            <a href="https://www.thecocktaildb.com/" > CocktailDB </a> 
            <br/>containing drinks and cocktails from around the world.</p>
          <form action='#content' className="btn-form" >
            <button type="submit" className="landing-btn lb-2">Learn More</button>
          </form>
        </section>
    </div>
  )
}

export default Landing;
import React from 'react';
import { Scrambler } from "react-text-scrambler";
import Button from '../reusables/Button';
import Header from '../header/Header';

import landingImg from '../images/landing-img.jpg';

const LandingHero =()=>{

const characters = "*"
const hOne = given =>(
  <span style={{color:"#f77f00ff"}}>{given.children}</span>
)

  return(
    <div>
      <img className="main-landing-img" src={landingImg} alt='splashing ice cubes in glasses'/>
      <Header />
        <section className="landing-over-img">
        <h1>
          <Scrambler text="Mix up your life with MixItUp" wrap={hOne} characters={characters}/>
        </h1>
          <p style={{textIndent:"6vw"}}>Want some new ingredients to try?</p>
          <p style={{textIndent:"6vw"}}> Want to explore different tastes?</p>
          <p style={{fontSize:"1.5vw", marginBottom:'1em'}}>Uses an open, crowd-sourced database from 
            <a href="https://www.thecocktaildb.com/" target="_blank" rel="noreferrer" > CocktailDB </a> 
            <br/>containing drinks and cocktails from around the world.
          </p>
          <Button to="#content" text="Learn More" formType="hero-btn-form hero-btn" classType="landing-btn"/>
        </section>
    </div>
  )
}

export default LandingHero;

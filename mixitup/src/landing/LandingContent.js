import React from 'react';
import fourLineup from '../images/fourLineup.jpg';
import lemonLime from '../images/lemonlimeCocktail.jpg';
import emptyGlasses from '../images/emptyGlasses.jpg';
import SearchBar from '../search/SearchBar';
import Button from '../reusables/Button';

const LandingContent = ()=>{

  return(
    <div id="content">
      {/* possible map to populate however reversed second row TODO  */}
      <div className='landing-content'>
        {/* row 1  */}
        <div className='content-image'>
            <img style={{height:"35vw", borderRadius:"50%"}}src={fourLineup} alt='four cocktails lined up, ready to go' />
        </div>
        <div className='content-text'>
            <p>Search by the name of the cocktail:</p>
            <div style={{height:"5vw", marginBottom:"6vh"}}>
            <SearchBar />
            </div>
            <p style={{fontSize:"1.5vw"}}>Some examples include Long Island Iced Tea, Butterfly Effect, Negroni and New Moon. Throw in a part of a name and see what happens. </p>
        </div>
      </div>
      {/* row 2  */}
      <div className='landing-content'>
      <div className='content-text'>
            <p> Browse through some ingredients to learn more about it and what drinks it can make. Maybe you have something laying around and you want to use it?</p>
            <Button to='ingredients' text='Browse Ingredients' formType='content-btn-form' classType='content-btn' />
        </div>
        <div className='content-image'>
            <img style={{height:"35vw", width:'100', border: "1px solid #ddd", borderRadius:"50%"}} src={lemonLime} alt='four cocktails lined up, ready to go' />
        </div>
      </div>
      {/* row 3  */}
      <div className='landing-content'>
        <div className='content-image'>
            <img style={{height:"35vw", width:"100", borderRadius:"50%"}}src={emptyGlasses} alt='four cocktails lined up, ready to go' />
        </div>
        <div className='content-text'>
            <p>You can browse the database by the first letter of the drink name.</p>
            <Button to='/Cocktails' text='Alphabetical Browse' formType='content-btn-form' classType='content-btn' />
        </div>
      </div>
    </div>
  )
}

export default LandingContent;
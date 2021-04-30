import React from 'react';
import fourLineup from '../images/fourLineup.jpg';
import lemonLime from '../images/lemonlimeCocktail.jpg';
import emptyGlasses from '../images/emptyGlasses.jpg';
import SearchBar from '../SearchBar';
import Button from '../Button';

const LandingContent = ()=>{

  return(
    <div id="content" style={{backgroundColor: "#eae2b7ff", height:"500px", marginTop:"1vw"}}>
      <div className='landing-content'>
        <div className='content-image'>
            <img style={{height:"35vw"}}src={fourLineup} alt='four cocktails lined up, ready to go' />
          
        </div>
        <div className='content-text'>
            <p>Search by the name of the cocktail:</p>
            <SearchBar />
            <p>Some examples include Long Island Ice Tea, Butterfly Effect, Negroni and New Moon. Throw in a random name and see what haapens. </p>

        </div>
      </div>
      <div className='landing-content'>
        <div className='content-image'>
            <img style={{height:"35vw", border: "1px solid #ddd", borderRadius: "4px"}} src={lemonLime} alt='four cocktails lined up, ready to go' />
        </div>
        <div className='content-text'>
            <p> Browse thorugh some ingedients to learn more about it and what drinks it can make.</p>
            <Button to='#' text='Browse Ingredients' />
        </div>
      </div>
      <div className='landing-content'>
        <div className='content-image'>
            <img style={{height:"35vw"}}src={emptyGlasses} alt='four cocktails lined up, ready to go' />
          
        </div>
        <div className='content-text'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <Button to='#' text='Browse Ingredients' />
        </div>
      </div>
    </div>

  )
}

export default LandingContent;
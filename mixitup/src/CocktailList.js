import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './header/Header';
import SearchBar from "./reusables/SearchBar";

const NamesList= ()=>{
  const alpha = ['a','b','c','d','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  const queryLetter= (letter)=>{
    // fetch()
    // fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    //   .then(res => res.status !== 200 ? console.log(`Status Code: ${res.status}`): res.json())
    //   .then(data => {setData(data.drinks[0])})
    //   .catch(err => console.log(`Fetch Error; Come on man:${err}`))
  }
  const alphaLink = (letter)=> {
    return(
      <Link to={`/Cocktails/#${letter}`} onClick={queryLetter(letter)}style={{marginLeft:"1.75vw", textDecoration:"none", color:"#003049ff" }}>{letter.toUpperCase()}</Link>
    )
  }
    


  return(
    <div>
      <Header dark={true} />
      {/* <h1 style={{textAlign:"center"}}>Cocktail List By First Letter</h1> */}
      <div className="alpha-header">
        <div className='search-bar'>
          <SearchBar />
        </div>
        <h1 className="title">Browse by Name</h1>
      </div>
      <hr/>
      <div className='letters'>
          {alpha.map((element, index)=> alphaLink(element))}
      </div>
    </div>
  )
}

export default NamesList;
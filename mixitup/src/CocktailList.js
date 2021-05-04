import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
// components 
import CocktailCardList from './CocktailCardList';
import Header from './header/Header';
import SearchBar from "./reusables/SearchBar";

const NamesList= ()=>{
  // LISTS NAMES OF COCKTAILS BY FIRST LETTER 
  const [letter, setLetter] = useState('a')
  const alpha = ['a','b','c','d','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  const queryLetter= async (letter)=>{
    let fetchByLetter = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter.queryKey[1]}`)
      .then(res => res.status !== 200 ? console.log(`Status Code: ${res.status}`): res.json())
      .catch(err => console.log(`Fetch Error; Come on man:${err}`))
      return fetchByLetter 
  }

  const{data, status} = useQuery(['fetchLetterList', letter], queryLetter, {manual: true, staleTime:300000})
  const drinks = data ? data.drinks : []

  const alphaLink = (letter, key)=> {
    // Maps each letter in header 
    return(
      <Link to={`/Cocktails/#${letter}`} onClick={()=> setLetter(letter)} style={{marginLeft:"2.6vw", textDecoration:"none", color:"#003049ff"}}  key={key} >{letter.toUpperCase()}</Link>
    )
  }

  return(
    <div>
      <Header dark={true} />
      <div className="alpha-header">
        <div className='search-bar'>
          <SearchBar />
        </div>
        <h1 className="title">Browse by Name</h1>
      </div>
      <hr/>
      <div className='letters'>
        {alpha.map((element, index)=> alphaLink(element, index))}
      </div>
        <div className='list-container'>
          <section className="list-cards">
            {drinks ? drinks.map((element, index)=> <CocktailCardList info={element} idxKey={index} />) : <h2>{status.toUpperCase()}: But nothing here yet...</h2>}
          </section>
        </div>
    </div>
  )
}

export default NamesList;
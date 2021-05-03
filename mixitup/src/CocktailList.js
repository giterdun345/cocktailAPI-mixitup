import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CocktailCardList from './CocktailCardList';
import Header from './header/Header';
import SearchBar from "./reusables/SearchBar";

const NamesList= ()=>{
  const [data, setData] = useState([])
  const alpha = ['a','b','c','d','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


  const queryLetter= async (letter)=>{
    console.log(letter)
    let test = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then(res => res.status !== 200 ? console.log(`Status Code: ${res.status}`): res.json())
      .then(data => {setData(data.drinks)
      console.log(data)})
      .catch(err => console.log(`Fetch Error; Come on man:${err}`))
      return test
  }

  const alphaLink = (letter, key)=> {
    return(
      <Link to={`/Cocktails/#${letter}`} onClick={()=> queryLetter(letter)} style={{marginLeft:"2.6vw", textDecoration:"none", color:"#003049ff"}}  key={key} >{letter.toUpperCase()}</Link>
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
          <section class="list-cards">
            {data ? data.map((element, index)=> <CocktailCardList info={element} key={index} />) : <h2>Nothing yet...</h2>}
          </section>
        </div>
         {/* {data.map(element => <CocktailCardList info={element}/>)} */}
    </div>
  )
}

export default NamesList;
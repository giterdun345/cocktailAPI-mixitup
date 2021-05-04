import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDrinkList from './hooks/useDrinkList';
// components 
import CocktailCardList from './CocktailCardList';
import Header from '../header/Header';
import ContentHeader from '../reusables/ContentHeader';


const CocktailList= ()=>{
  // LISTS NAMES OF COCKTAILS BY FIRST LETTER 
  const [letter, setLetter] = useState('a')
  const { data, status } = useDrinkList(letter)
  const drinks = data.drinks
  const alpha = ['a','b','c','d','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  
  const alphaLink = (letter)=> {
    // Maps each letter in header 
    return(
      <Link to={`/Cocktails/#${letter}`} onClick={()=> setLetter(letter)} style={{marginLeft:"2.6vw", textDecoration:"none", color:"#003049ff"}}  key={letter} >{letter.toUpperCase()}</Link>
    )
  }

  return(
    <div>
      <Header dark={true} />
      <ContentHeader text="Browse By Name"/>
      <div className='letters'>
        {alpha.map((element, index)=> alphaLink(element, index))}
      </div>
        <div className='list-container'>
          <section className="list-cards">
            {drinks ? drinks.map((element, index)=> <CocktailCardList info={element} key={index} idxKey={index + 57} fromIngredients={false} />) : <h2 key='345'> {status.toUpperCase()}:But nothing here yet...</h2>}
          </section>
        </div>
    </div>
  )
}

export default CocktailList;
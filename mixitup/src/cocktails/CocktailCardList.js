import React from "react";
import { Link } from 'react-router-dom';

const CocktailCardList= ({info, idxKey, fromIngredients})=>{
  return(   
    <article key={idxKey} className="list-card">
        <Link to={`/names-detail/${info.idDrink}`} alt='cocktail image click for details' key={info.idDrink} style={fromIngredients ? {height:"330px"} : null}>
          <img src={`${info.strDrinkThumb}/preview`} alt={`cocktail named ${info.strDrink}`} key={`${info.strDrink}${idxKey}`}/>
          <h2 key={info.strDrink}>{info.strDrink}</h2>
          <h3 key={`${idxKey + 200}`}>{info.strAlcoholic}</h3>
          <h4 key={`${idxKey + 100}`}>{info.strGlass}</h4>
        </Link>
    </article>
  )
}

export default CocktailCardList;

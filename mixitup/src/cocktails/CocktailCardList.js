import React from "react";
import { Link } from 'react-router-dom';

const CocktailCardList= ({info, idxKey})=>{

  return(   
    <article key={idxKey} className="list-card">
        <Link to={`/names-detail/${info.idDrink}`} alt='cocktail image click for details' style={{cursor:"pointer"}} key={idxKey+1}>
          <img src={`${info.strDrinkThumb}/preview`} alt={`cocktail named ${info.strDrink}`} key={idxKey+2}/>
          <h2 key={idxKey+3}>{info.strDrink}</h2>
          <h3 key={idxKey+4}>{info.strAlcoholic}</h3>
          <h4 key={idxKey+5}>{info.strGlass}</h4>
        </Link>
    </article>
  )
}

export default CocktailCardList;

import React from "react";
import { Link } from 'react-router-dom';

const CocktailCardList= ({info, idxKey})=>{

  return(   
    <article key={idxKey} className="list-card">
        <Link to={`/names-detail/${info.idDrink}`} alt='cocktail image click for details' style={{cursor:"pointer"}} key={info.idDrink}>
          <img src={`${info.strDrinkThumb}/preview`} alt={`cocktail named ${info.strDrink}`} key={`${info.strDrink}${idxKey}`}/>
          <h2 key={info.strDrink}>{info.strDrink}</h2>
          <h3 key={`${info.strAlcoholic}${idxKey}`}>{info.strAlcoholic}</h3>
          <h4 key={`${info.strGlass}${idxKey}`}>{info.strGlass}</h4>
        </Link>
    </article>
  )
}

export default CocktailCardList;

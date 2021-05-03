import React from "react";
import { Link } from 'react-router-dom';

const CocktailCardList= ({info, key})=>{

  console.log(info)

  return(   
    <article key={key} className="list-card">
        <Link to={`/names-detail/${info.idDrink}`} alt='cocktail image click for details' style={{cursor:"pointer"}}>
          <img src={`${info.strDrinkThumb}/preview`} alt={`cocktail named ${info.strDrink}`} />
          <h2>{info.strDrink}</h2>
          <h3>{info.strAlcoholic}</h3>
          <h4>{`${info.strGlass}`}</h4>
        </Link>
    </article>
  )
}

export default CocktailCardList;

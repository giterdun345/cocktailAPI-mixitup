import React from 'react';
import { Link } from 'react-router-dom';


const IngredientsCardList = ({info, idxKey}) => {
  // card to be listed for each ingredient with image and title 
  return (
        <article key={idxKey * 7} className="list-card" style={{flex: "0 0 145.65px", height:"220.63px", marginLeft:"20px"}}>
          <Link to={`/ingredients-detail/${info.strIngredient1}`} alt='cocktail image click for details' key={idxKey * 3}>
            <img style={{border:"none"}} src={`${`https://www.thecocktaildb.com/images/ingredients/${info.strIngredient1}-Small.png`}`} alt={`ingredient named ${info.strIngredient1}`} key={`${idxKey * 4}`}/>
            <h2 key={info.strIngredient1}>{info.strIngredient1}</h2>
          </Link>
        </article>
    );
}
 
export default IngredientsCardList;
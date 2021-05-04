import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

// components 
import Header from './header/Header';
// import SearchBar from "./reusables/SearchBar";


const NameDetail= ()=>{

  const id = useParams().nameid
  const ingredientNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  const queryCocktailDetail= async ({ queryKey })=>{
    const [ , { id }] = queryKey
    let fetchByName = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .catch(err => console.log(`Fetch Error; Come on man:${err}`));
      return fetchByName 
  }

  const{ isLoading, isError, data, error } = useQuery(['cocktaildetails',{id}], queryCocktailDetail)

  const details = !isLoading && !isError ? data.drinks[0]: null

  console.log(details)
  return(
    <div>
      <Header dark={true} />
      <div className='details-container'>
        <div className='detail-section'>
          <img src={`${details.strDrinkThumb}`} alt={`${details.strDrink}`} />
        </div>
        <div className='detail-section'>
          <h2>{details.strDrink}</h2>
          <h3>{details.strAlcoholic}</h3>
          <h4>{details.strGlass}</h4>
          <h5>Instructions:{details.strInstructions}</h5>
        </div>
        <div className='detail-section'>
          <h2>Ingredients</h2>
          {ingredientNum.map(n => details[`strIngredient${n}`] ? <h3>{details[`strIngredient${n}`]} {details[`strMeasure${n}`]}</h3> : null)}
        </div>
      </div>
      <div className='ingredients-container'>
      </div>
    </div> 
  )
}

export default NameDetail;
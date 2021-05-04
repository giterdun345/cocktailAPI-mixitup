import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
// components 
import Header from './header/Header';
import SearchBar from "./reusables/SearchBar";

const NameDetail= ()=>{
  // DETAILS OF THE COCKTAIL WITH INGREDIENTS GIVEN AND INSTRUCTIONS. POSSIBLE OTHER LANGUAGE TO USE>
  const id = useParams().nameid
  const ingredientNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  const queryCocktailDetail= async ({ queryKey })=>{
    const [ , { id }] = queryKey
    let fetchByName = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .catch(err => console.log(`Fetch Error; Come on man:${err}`));
      return fetchByName 
  }

  const{ isLoading, isError, data} = useQuery(['cocktaildetails',{id}], queryCocktailDetail, {staleTime: 300000})
  const details = !isLoading && !isError ? data.drinks[0]: null

  return(
    <div>
      <Header dark={true} />
      <div className='details'>
        <div className='detail-header'>
          <div style={{margin:"0"}}>
          <SearchBar />
          </div>
          <h1>{details.strDrink}</h1>
        </div>
        <hr/>
        <div className='detail-container'>
          <div className='detail-info'>
          <h2>Ingredients</h2>
          <ul>
            {ingredientNum.map(n => details[`strIngredient${n}`] ? <li key={n}>{details[`strIngredient${n}`]} {details[`strMeasure${n}`]}</li> : null)}
          </ul>
          <h4>Instructions: {details.strInstructions}</h4>
        </div>
          <div className='detail-img'>
            <img style={{display:"block", width:"30vw", height:"30vw"}} src={`${details.strDrinkThumb}`} alt={`${details.strDrink}`}/>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default NameDetail;
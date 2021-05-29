import React from 'react';
import useDrinkDetails from './hooks/useDrinkDetails';
import { useParams } from 'react-router-dom';
// components 
import Header from '../header/Header';
import DetailHeader from '../reusables/DetailHeader';

const NameDetail= ()=>{
  // DETAILS OF THE COCKTAIL WITH INGREDIENTS GIVEN AND INSTRUCTIONS. POSSIBLE OTHER LANGUAGE TO USE>
  const id = useParams().nameid
  const ingredientNum = [...Array(15).keys()]
  const { data } = useDrinkDetails(id)
  const details = data.drinks[0]


  return(
    <div>
      <Header dark={true} />
      <div className='details'>
        <DetailHeader text={details.strDrink} />
        <div className='detail-container'>
          <div className='detail-info'>
          <h2>Ingredients</h2>
          <ul>
            {ingredientNum.map(n => details[`strIngredient${n}`] ? <li key={n}>{details[`strMeasure${n}`]} {details[`strIngredient${n}`]}</li> : null)}
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
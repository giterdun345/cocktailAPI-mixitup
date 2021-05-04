import React from 'react';
import { useParams } from 'react-router-dom';
import useDrinkByIngredient from './hooks/useDrinkByIngredient';
// components 
import Header from '../header/Header';
import ContentHeader from '../reusables/ContentHeader';
import CocktailCardList from '../cocktails/CocktailCardList';


const IngredientDetail = () => {

  const ingredient = useParams().ingredient
  const { data, status } = useDrinkByIngredient(ingredient)
  const drinks = data.drinks
  console.log(drinks)
  return ( 
    <div>
      <Header dark={true} />
      <ContentHeader text={`Drinks Using ${ingredient}`} />
      <div className='list-container'>
          <section className="list-cards">
            {drinks ? drinks.map((element, index)=> <CocktailCardList info={element} idxKey={index} fromIngredients={true} />) : <h2 key='345'> {status.toUpperCase()}:But nothing here yet...</h2>}
          </section>
        </div>
    </div>
  );
}
 
export default IngredientDetail;
import React from 'react';
import useList from './hooks/useList';
// components 
import Header from '../header/Header';
import ContentHeader from '../reusables/ContentHeader';
import IngredientsCardList from './IngredientsCardList';

const IngredientsList = () => {
//  returns a list of all the ingredients included in the cocktaildb
const { data } = useList()
const ingList = data.drinks

  return ( 
    <div>
    <Header dark={true} />
    <ContentHeader text="Cocktails By Ingredient"/>
      <div className='list-container'>
        <section className="list-cards">
          {ingList.map((element, index)=> <IngredientsCardList info={element} key={index} idxKey={index} />)}
        </section>
      </div> 
  </div>
  )
}
 
export default IngredientsList;
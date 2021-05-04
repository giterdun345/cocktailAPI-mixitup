import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CocktailCardList from '../CocktailCardList';
import Header from'../header/Header';
import SearchBar from './SearchBar';

const SearchResults =()=>{
  const searchFor = useParams().name
  
  const fetchByName = async ({ queryKey })=>{
    const [ , { searchFor }] = queryKey
    console.log(searchFor)
    const cocktailNames = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchFor}`)
      .then(res => res.status !== 200 ? console.log(`Status Code: ${res.status}`): res.json())
      .catch(err => console.log(`Fetch Error; Come on man:${err}`))
      return cocktailNames
  }

  const{ isLoading, isError, data} = useQuery(['cocktailName', {searchFor}], fetchByName, {manual:true,  staleTime:300000})
  const cocktails = !isLoading && !isError ? data.drinks: null

  console.log(cocktails)

  return(
  <div>
    <Header dark={true} />
    <SearchBar />
    <div className='list-container'>
          <section className="list-cards">
    {cocktails ? cocktails.map((element, index)=> <CocktailCardList info={element} idxKey={index} />) : <h2> Sorry, we didn't find anything.</h2>}
    </section>
    </div>
  </div>
  )
}

export default SearchResults;

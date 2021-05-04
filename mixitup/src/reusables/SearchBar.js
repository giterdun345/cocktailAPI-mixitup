import React, { useState } from 'react';
import { useQuery } from 'react-query';

const SearchBar = ()=>{
  const [searchItem, setSearchItem] = useState('')
  
  const fetchByName = async ({ queryKey })=>{
    const [ , { name }] = queryKey
    const cocktailName = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then(res => res.status !== 200 ? console.log(`Status Code: ${res.status}`): res.json())
      .catch(err => console.log(`Fetch Error; Come on man:${err}`))
      return cocktailName
  }

  const{ isLoading, isError, data} = useQuery(['cocktailName', {searchItem}], fetchByName, {manual:true,  staleTime:300000})
  const cocktails = !isLoading && !isError ? data.drinks: null

  console.log(cocktails)

  return(
      <div className="search">
        <div>
          <input onChange={e => setSearchItem(e.target.value)}type="text" placeholder="Cocktail Name" required />
        </div>
      </div>
  )
}

export default SearchBar;
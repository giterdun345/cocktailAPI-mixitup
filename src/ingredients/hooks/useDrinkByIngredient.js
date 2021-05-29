import { useQuery } from 'react-query';

const fetchDrinksByIngredient = async ({ queryKey })=>{
  const fetchDrinks = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${queryKey[1]}`)
  .then(res => res.status !== 200 ? console.log(`Status Code: ${res.status}`): res.json())
  .catch(err => console.log(`Fetch Error; ingredientsAll:${err}`))

  return fetchDrinks
}

export default function useDrinkByIngredient(ingredient){
  return useQuery(['ingredientsFetch', ingredient], fetchDrinksByIngredient, {staleTime:300000})
}
import { useQuery } from 'react-query';


const fetchAllIngredients = async ()=>{
  const ingredientsAll = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    .then(res => res.status !== 200 ? console.log(`Status Code: ${res.status}`): res.json())
    .catch(err => console.log(`Fetch Error; ingredientsAll:${err}`))
    return ingredientsAll
}

export default function useList(){
  return useQuery('ingredientsFetch', fetchAllIngredients, {staleTime:300000})
}


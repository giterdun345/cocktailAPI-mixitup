import { useQuery } from "react-query";

const queryCocktailDetail= async ({ queryKey })=>{
  const [ , { id }] = queryKey
  let fetchByName = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .catch(err => console.log(`Fetch Error; Come on man:${err}`));
    return fetchByName 
}

export default function useDrinkDetails(id){
  return useQuery(['cocktaildetails',{id}], queryCocktailDetail, {staleTime: 300000})
}
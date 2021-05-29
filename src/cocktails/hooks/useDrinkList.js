import { useQuery } from "react-query";

const queryLetter= async (letter)=>{
  let fetchByLetter = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter.queryKey[1]}`)
    .then(res => res.status !== 200 ? console.log(`Status Code: ${res.status}`): res.json())
    .catch(err => console.log(`Fetch Error; Come on man:${err}`))
    return fetchByLetter 
}

export default function useDrinkList(letter){
  return useQuery(['fetchLetterList', letter], queryLetter, {manual: true, staleTime:300000})
}

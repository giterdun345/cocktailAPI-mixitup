import React, { useState } from 'react';
import { useQuery } from 'react-query';

const SearchBar = ()=>{
  const [searchItem, setSearchItem] = useState('')
  
  console.log(searchItem)
  
  return(
      <div className="search">
        <div>
          <input onChange={e => setSearchItem(e.target)}type="text" placeholder="Cocktail Name" required />
        </div>
      </div>
  )
}

export default SearchBar;
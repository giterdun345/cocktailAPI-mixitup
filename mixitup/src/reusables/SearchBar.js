import React from 'react';

const SearchBar = ()=>{
  return(
      <div className="search">
       <div>
          <input type="text" placeholder="Cocktail Name" required />
        </div>
      </div>
  )
}

export default SearchBar;
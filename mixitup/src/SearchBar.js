import React from 'react';

const SearchBar = ()=>{
  return(
      <div className="search">
       <div>
          <input type="text" placeholder="Search for a cocktail..." required />
        </div>
      </div>
  )
}

export default SearchBar;
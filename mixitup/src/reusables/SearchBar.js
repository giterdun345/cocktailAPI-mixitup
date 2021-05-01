import React from 'react';

const SearchBar = ()=>{
  return(
      <div className="search">
       <div>
          <input type="text" placeholder="Search..." required />
        </div>
      </div>
  )
}

export default SearchBar;
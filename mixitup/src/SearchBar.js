import React from 'react';

const SearchBar = ()=>{
  return(
    <div className='search-bar'>
      <input className='input' placeholder="Search by name" /> 
      <button type='submit' className='search-button'>
        Search Name
      </button>
    </div>
  )
}

export default SearchBar;

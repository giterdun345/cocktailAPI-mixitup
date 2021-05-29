import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = ()=>{
// uses ref to obtain input and when enter is pressed redirects to search 
// results page with possible matches 
  let searchInput = useRef()
  let  history = useHistory();

  const handleSearch =(e)=>{
    if (e.key === 'Enter') {
      history.push(`/search-name/${searchInput.current.value}`)
    }
  }

  return(
      <div className="search">
        <div>
          <input ref={searchInput} onKeyDown={e => handleSearch(e)} type="text" placeholder="Cocktail Name" required />
        </div>
      </div>
  )
}

export default SearchBar;
import React from 'react';
import SearchBar from '../search/SearchBar';

const ContentHeader = (props) => {
  return (
    <div>
      <div className="content-header">
        <div className='search-bar'>
          <SearchBar />
        </div>
        <h1 className="title">{props.text}</h1>
      </div>
      <hr/>
    </div>
    );
}
 
export default ContentHeader;
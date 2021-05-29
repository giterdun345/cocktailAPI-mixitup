import React from 'react';
import SearchBar from '../search/SearchBar';

const DetailHeader = (props) => {
  return (  
    <div>
      <div className='detail-header'>
        <div style={{margin:"0"}}>
          <SearchBar />
          </div>
          <h1>{props.text}</h1>
        </div>
        <hr/>
    </div>
  );
}
 
export default DetailHeader;
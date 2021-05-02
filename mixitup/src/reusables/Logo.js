import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';

const Logo = ()=>{
  return(
      <Link to='/' className='logo-container'>
          <span>
          <FontAwesomeIcon  icon={faCocktail} 
          style={{color:"#fcbf49ff", fontSize:"4.5vw", filter:"drop-shadow(2px 3px 1px #eae2b7ff)", paddingBottom:"0.75rem"}}/> 
          </span>                 
          <span style={{color:"#f77f00ff", textShadow:"2px 3px #003049ff"}}><i>Mix</i></span>
          <span 
          style={{color:"#eae2b7ff", textShadow:"2px 3px #003049ff"}}><i>it</i>Up</span>
      </Link>
  )
}

export default Logo;

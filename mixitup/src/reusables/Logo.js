import React from 'react';
import { Link } from 'react-router-dom';
import logoimg from '../images/pngegg.png';

const Logo = ()=>{
  return(
      <Link to='/' className='logo'>
          <span>
            <span>
              <img src={logoimg} alt='cocktail icon in logo' style={{width: "3.5vw", height:"4vw", marginLeft:"10px" }} />
            </span>
          </span>                 
          <span style={{color:"#f77f00ff", textShadow:"2px 3px #003049ff"}}><i>Mix</i></span>
          <span style={{color:"#eae2b7ff", textShadow:"2px 3px #003049ff"}}><i>it</i>Up</span>
      </Link>
  )
}

export default Logo;

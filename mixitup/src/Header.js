import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCocktail } from '@fortawesome/free-solid-svg-icons'



const Header = ()=>{
  return(
    <header className='header'>
      <div className='header-container'>
        {/* logo container with icon  */}
        <a href='#' className='logo-container'>
          <span className= 'idkYet'>
            <FontAwesomeIcon  icon={faCocktail} className='idk' />          
            MixItUp
          </span>
        </a>
        {/* Links in navbar  */}
        <nav className='link-container'>
          <ul>
            <li><a href='#' className='nav-link'>Link 1</a></li>
            <li><a href='#' className='nav-link'>Link 2</a></li>
            <li><a href='#' className='nav-link'>Link 3</a></li>
          </ul>
        </nav>
        {/* search bar  */}
        <div className='search-bar'>
          <input className='input' placeholder="Search by name" />
          <button type='submit' className='search-button'>
            Search Name
          </button>
        </div>
      </div>
    </header>
  )

}

export default Header;
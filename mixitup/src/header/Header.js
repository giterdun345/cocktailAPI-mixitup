import React from 'react';
import Logo from '../Logo';
import NavLinks from './NavLinks'

const Header = ()=>{
  return(
    <header className="header">
      <div className="header-container">
        <Logo />
        <NavLinks />
      </div>
    </header>
  )
}

export default Header;
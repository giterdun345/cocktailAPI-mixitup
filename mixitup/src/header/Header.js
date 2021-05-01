import React from 'react';
import Logo from '../reusables/Logo';
import NavLinks from './NavLinks';

const Header = (props)=>{

  return(
    <header className="header" style={props.dark ? {backgroundColor:"rgb(50, 50, 50)"}: {}}>
      <div className="header-container">
        <Logo />
        <NavLinks />
      </div>
    </header>
  )
}

export default Header;
import React from 'react';

const NavLinks = ()=>{

  const links = ['Names', 'Ingredients', 'Random']
  
  return(   
    <nav>
      <ul className='link-container'>
      { links.map(element => <li><a href='#' className='nav-link'> {element} |</a></li>)}
      </ul>
    </nav>
  )
}

export default NavLinks;
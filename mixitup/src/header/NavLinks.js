import React, { useState } from 'react';

const NavLinks= ()=>{
  // nav links ingredients and random link to seperate link whil names has modal pop up 
  const links = ['Names', 'Ingredients', 'Random']
  const [ show, setShow ] = useState(false)
 
  
  return(   
    <nav>
      <ul className='link-container'>
      { links.map((element, index) => element === "Names" ? 
      <li key={index}><a href='#' onClick={() => setShow(!show)} className='nav-link' key={element}> {element} &nbsp; |</a></li>
      : <li key={index}><a href='#' className='nav-link'  key={element}> {element} &nbsp; |</a></li>
      )}
      </ul>
    </nav>
  )
}

export default NavLinks;
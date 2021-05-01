import React, { useState, useEffect } from 'react';
import Modal from '../reusables/Modal';

const NavLinks= ()=>{
  // nav links ingredients and random link to seperate link whil names has modal pop up 
  const links = ['Names', 'Ingredients', 'Random']
  const [ show, setShow ] = useState(false)
 
  // turn off vertical scroll when modal is open 
  if(show){
      document.body.style.overflow = 'hidden'
    }
  else{
      document.body.style.overflow = 'auto'
    }

  return(   
    <nav>
      <ul className='link-container'>
      { links.map((element, index) => element === "Random" ? 
      <li key={index}><a href='#popped' onClick={() => {setShow(!show)}} className='nav-link' key={element}> | {element}</a></li>
      : <li key={index}><a href={`/${element}`} className='nav-link'  key={element}> | {element} </a></li>
      )}
      </ul>
      <Modal show={show} />
    </nav>
  )
}

export default NavLinks;
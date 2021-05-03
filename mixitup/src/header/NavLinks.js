import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from '../reusables/Modal';

const NavLinks= ()=>{
  // nav links ingredients and random link to seperate link whil names has modal pop up 
  const links = ['Cocktails', 'Ingredients', 'Random']
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
          <li key={index}><NavLink exact to='#popped' onClick={() => {setShow(!show)}} className='nav-link' isActive={()=>show ? true:false}activeStyle={{color:"#d62828ff"}} key={element}> | {element}</NavLink></li>
          : 
          <li key={index}><NavLink exact to={`/${element}`} className='nav-link'  key={element}> | {element} </NavLink></li>
      )}
      </ul>
      <Modal show={show} />
    </nav>
  )
}

export default NavLinks;
import React from 'react';
import {Link} from 'react-router-dom';

const Button = (props)=>{
  // form type differs from landing hero and landing content by margin (formType) and color (classType)
  return(
    <Link action={props.to}className={proLinkType} >
      <button type="submit" className={`${props.classType} lb-2`}>{props.text}</button>
    </Link>
  )
}

export default Button;
import React from 'react';

const Button = (props)=>{
  // form type differs from landing hero and landing content by margin (formType) and color (classType)
  return(
    <a href={props.to} className={props.formType} >
      <button type="submit" className={`${props.classType} lb-2`}>{props.text}</button>
    </a>
  )
}

export default Button;
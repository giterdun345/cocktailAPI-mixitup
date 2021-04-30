import React from 'react';


const Button = (props)=>{
  return(
    <form action={props.to}className="btn-form" >
      <button type="submit" className="landing-btn lb-2">{props.text}</button>
    </form>
  )
}

export default Button;
import React from "react";
import Random from './Random';

const Modal= (props)=> {

    return (
      <div>
        {props.show ? <div className="modal">
                        <button onClick={()=> props.setShow(!props.show)}>&times;</button>
                        <Random loading={props.show} setShow={props.setShow} />
                      </div> 
                      : null} 
      </div>
    )
}

export default Modal;
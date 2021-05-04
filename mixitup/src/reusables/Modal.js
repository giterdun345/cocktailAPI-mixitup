import React from "react";
import Random from '../reusables/Random';

const Modal= (props)=> {

    return (
      <div>
        {props.show ? <div className="modal-overlay"><Random loading={props.show} setShow={props.setShow} /></div> : null}
      </div>
    )
}

export default Modal;
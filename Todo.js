import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props)=> {
  const [modal,setModal] =useState(false);


  const deleteHandler = () => {
setModal(true)

  };
    return (
        
        <div className="card">
        <h2>{props.text}</h2>
        <div className="action">
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        {modal && <Modal />}
        {modal && <Backdrop/>}
      </div>
    )
};
export default Todo;
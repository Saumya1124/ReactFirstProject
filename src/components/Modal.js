import React from "react";
import ReactDOM from "react-dom";
import './UserForm.css'
const Modal = (props)=> {
    const ModalElement = (props)=>{
        return (
          <div className={`modal ${!props.valid ? 'invalid' : ''}`}>
            <div className='modal-form col-lg-6 col-md-6 col-sm-8 col-12'>
                 <div className='header'>
                        <h4>Invalid Entry</h4>
                 </div>
                 <br/>
                 <div className='content'>
                        <p>{props.message}</p>
                 </div>
                 <br />
                 <div className='footer'>
                      <button onClick={props.closeModal}>Cancel</button>
                 </div>
              </div>
          </div>
        )
    }
    return(
           <React.Fragment>
                {ReactDOM.createPortal(<ModalElement message={props.message} valid = {props.valid} closeModal={props.closeModal
                }/>, document.getElementById('Modal'))}
                
           </React.Fragment>
    )
}

export default Modal;
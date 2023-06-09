import React from 'react';
import { useState , useRef} from 'react'
import './UserForm.css'
import UserDetails from './UserDetails';
import Wrapper from './Wrapper';
import Modal from './Modal';
const UserForm = ()=> {



    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef = useRef();

    
    const [newData , setNewData] = useState([]);
    const [valid , setValid] = useState(true);
    const [validAge , setValidAge] = useState(true);
    

    const userData = (e)=> {
        e.preventDefault()

        const userName = nameInputRef.current.value;
        const age = ageInputRef.current.value;
        const college = collegeInputRef.current.value;
        
        if(userName.trim().length == 0 | age.trim().length == 0){
            return setValid(false)
        }
        if(age <= 0){
            return setValidAge(false)
        }
        console.log(userName,age)
        setNewData([...newData,{name: userName , age: age , college : college }])

        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        collegeInputRef.current.value = '';

        
        
    }


    console.log(newData)

    const closeModal = ()=> {
        setValid(true)
    }

    const closeModalAge = ()=> {
        setValidAge(true)
    }
   



    return (
        <React.Fragment>
            <div className="user-form">
                <form className='col-lg-4 col-md-6 col-12' onSubmit={userData}>
                        <div className='form-input '>
                            <br />
                            <label>UserName</label>
                            {/* <br /> */}
                            <input type="text"  ref={nameInputRef}></input>
                            <br />
                            <label>Age</label>
                            {/* <br /> */}
                            <input type="text" ref = {ageInputRef}></input>
                            <br />
                            <label>College Name</label>
                            <input type='text' ref={collegeInputRef}></input>
                        </div>
                        <br />
                        <button>Add User</button>
                        
                        
                </form>
            </div>
            {/* Empty input Modal */}
            {/* <div className={`modal ${!valid ? 'invalid' : ''}`}>
                  <div className='modal-form col-lg-6 col-md-6 col-sm-8 col-12'>
                       <div className='header'>
                              <h4>Invalid Entry</h4>
                       </div>
                       <br/>
                       <div className='content'>
                              <p>Please enter valid username and age</p>
                       </div>
                       <br />
                       <div className='footer'>
                            <button onClick={closeModal}>Cancel</button>
                       </div>
                  </div>
            </div> */}
            <Modal message='enter valid username and age' closeModal={closeModal} valid = {valid}></Modal>
            <Modal message='enter valid age' closeModal={closeModalAge} valid = {validAge}></Modal>
            {/* Age Modal */}
            {/* <div className={`modal ${!validAge ? 'invalid' : ''}`}>
                  <div className='modal-form col-lg-6 col-md-6 col-sm-8 col-12'>
                       <div className='header'>
                              <h4>Invalid Entry</h4>
                       </div>
                       <br/>
                       <div className='content'>
                              <p>Please enter valid age.</p>
                       </div>
                       <br />
                       <div className='footer'>
                            <button onClick={closeModalAge}>Cancel</button>
                       </div>
                  </div>
            </div> */}

            <br />
            
            <UserDetails data = {newData}></UserDetails>

        </React.Fragment>

    )
}

export default UserForm
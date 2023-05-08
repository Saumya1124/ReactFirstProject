import { useState } from 'react'
import './UserForm.css'
import UserDetails from './UserDetails';
const UserForm = ()=> {

    const [userName , setUserName] = useState('');
    const [age, setAge] = useState('');
    const [newData , setNewData] = useState([]);
    const [valid , setValid] = useState(true);
    const [validAge , setValidAge] = useState(true);
    

    const userData = (e)=> {
        e.preventDefault()
        if(userName.trim().length == 0 | age.trim().length == 0){
            return setValid(false)
        }
        if(age <= 0){
            return setValidAge(false)
        }
        console.log(userName,age)
        // const newData = {name: userName , age: age}
        setNewData([...newData,{name: userName , age: age}])

        setUserName('')
        setAge('')
    }


    console.log(newData)

    const closeModal = ()=> {
        setValid(true)
    }

    const closeModalAge = ()=> {
        setValidAge(true)
    }
   



    return (
        <div>
            <div className="user-form">
                <form className='col-lg-4 col-md-6 col-12' onSubmit={userData}>
                        <div className='form-input '>
                            <br />
                            <label>UserName</label>
                            {/* <br /> */}
                            <input type="text" value={userName}onChange={(event)=>setUserName(event.target.value)}></input>
                            <br />
                            <label>Age</label>
                            {/* <br /> */}
                            <input type="text" value={age} onChange={(event)=>setAge(event.target.value)}></input>
                        </div>
                        <br />
                        <button>Add User</button>
                        
                        
                </form>
            </div>
            {/* Empty input Modal */}
            <div className={`modal ${!valid ? 'invalid' : ''}`}>
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
            </div>
            {/* Age Modal */}
            <div className={`modal ${!validAge ? 'invalid' : ''}`}>
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
            </div>

            <br />
            
            <UserDetails data = {newData}></UserDetails>

        </div>

    )
}

export default UserForm
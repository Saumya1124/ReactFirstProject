import './UserDetails.css'
const UserDetails = (props)=> {
    console.log(props.data)
    return(
        <div className='user-Details'>
             
                 {props.data.map((data)=>(
                    <div className='userData col-lg-6 col-md-6 col-12'>
                          <h3>{data.name}</h3>
                          <h3>{data.age}</h3>
                          <h3>{data.college}</h3>
                    </div>
                 ))}
             
        


        </div>
    )
}
export default UserDetails
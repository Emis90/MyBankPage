import React,{ useState } from 'react';
import Form from './Form'
const Profile = ({user, setUser}) => {
    
    const [toggle, setToggle] = useState('info')
    
   if(toggle === 'info') {
    return (
        <div className='profile'>
            {user && user ? (
            <div  id='userContainer'>
            <p style={{fontSize: 30}}>{user.firstName} {user.lastName}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <button id='changeButton' onClick={()=> setToggle('change')}>Change credentials</button> 
            </div>
            ) : null}
        </div>
    )
   } else {
     return <Form setToggle={setToggle} setUser={setUser} user={user}/>
   }

}

export default Profile
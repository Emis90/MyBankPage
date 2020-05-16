import React,{ useState } from 'react';
import Form from './Form'
const Profile = ({user, setUser}) => {
    
    const [toggle, setToggle] = useState('change')
    
   if(toggle === 'info') {
    return (
        <div className='profile'>
         <div id='userContainer'>
            {user && user ? (
            <div>
            <p style={{fontSize: 30}}>{user.firstName} {user.lastName}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            </div>
            ) : null}
         </div> 
         <button id='changeButton' onClick={()=> setToggle('change')}>Change credentials</button> 
        </div>
    )
   } else {
     return <Form setToggle={setToggle} setUser={setUser}/>
   }

}

export default Profile
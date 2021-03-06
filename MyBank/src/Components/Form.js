import React, {useState } from 'react'

//use span for errors
const Form = ({setToggle, setUser, user}) => {
    const [newUser, setNewUser] = useState({})
  
    const change = (event) => {
        setNewUser({...newUser, 
         [event.target.name]: event.target.value
        })
     }

    const submit = (e) => {
      e.preventDefault()
        newUser.firstName = newUser.firstName[0].toUpperCase() + newUser.firstName.slice(1).toLowerCase()
        newUser.lastName = newUser.lastName[0].toUpperCase() + newUser.lastName.slice(1).toLowerCase()
        newUser.created = new Date()
        fetch(`/api/account/${user.id}`, { method: 'put', body: JSON.stringify(newUser) })
        .then(res => res.json())
        .then(data => {
          setUser(data)
          setToggle('info')})
        .catch(error => console.log(error))
    }

    return(
        <div className='form'>
          <h2>Submit your new credentials</h2>
        <form onChange={change} onSubmit={(e) => submit(e)}>
        <div className='fields'>
        <input type="text" name="firstName" placeholder='First name'required/>
        </div>
        <div className='fields'>
        <input type="text" name="lastName" placeholder='Last name' required/>
        </div>
        <div className='fields'>
        <input type="tel" name="phone" placeholder='phone'pattern="[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]" required/>
        </div>
        <div className='fields'>
        <input type="email" name="email" placeholder='email' required/>
        </div>
        <div className='fields'>
        <input type="submit" value="Submit" id='submit'/> 
        </div>
        </form>
        </div>
        )
}

export default Form
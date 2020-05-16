import React, {useState } from 'react'
import axios from 'axios'

//use span for errors
const Form = ({setToggle, setUser}) => {
    const [newUser, setNewUser] = useState({firstName: '', lastName: '', phone: '', email: ''})

    const change = (event) => {/////validate here
        setNewUser({...newUser, 
         [event.target.name]: event.target.value
        })
        console.log(newUser)
     }

    const submit = async(e) => {
      e.preventDefault()
        newUser.firstName = newUser.firstName[0].toUpperCase() + newUser.firstName.slice(1).toLowerCase()
        newUser.lastName = newUser.lastName[0].toUpperCase() + newUser.lastName.slice(1).toLowerCase()
        newUser.created = new Date()
      try {
        let {data} = await axios.put(`/api/user`, newUser)
        setUser(data)
        setToggle('info')
      } catch (error) {
        throw(error)
      }
    }

    return(
        <div id='form'>
          <h3>Submit your new credentials</h3>
        <form onChange={change} onSubmit={(e)=> submit(e)}>
        <div className='fields'>
        <input type="text" name="firstName" placeHolder='First name'required/>
        </div>
        <div className='fields'>
        <input type="text" name="lastName" placeHolder='Last name' required/>
        </div>
        <div className='fields'>
        <input type="tel" name="phone" placeHolder='phone'pattern="[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]" required/>
        </div>
        <div className='fields'>
        <input type="email" name="email" placeHolder='email' required/>
        </div>
        <div className='fields'>
        <input type="submit" value="Submit" id='submit'/> 
        </div>

        </form>
        </div>
        )
}

export default Form
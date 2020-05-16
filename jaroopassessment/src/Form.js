import React, {useState } from 'react'
import axios from 'axios'

//use span for errors
const Form = ({setToggle, setUser}) => {
    const [newUser, setNewUser] = useState({firstName: '', lastName: '', phone: '', email: ''})
    // const validEmailRegex = RegExp(
    //   /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    // );
    // const validateForm = errors => {
   
    // };
    const change = (event) => {/////update the state
        setNewUser({...newUser, 
         [event.target.name]: event.target.value
        })
        console.log(newUser)
     }
    const submit = async(e) => {
      e.preventDefault()
      try {
        let {data} = await axios.put(`/api/user`, newUser)
        setUser(data)
        setToggle('info')
      } catch (error) {
        throw(error)
      }
       
    }
    return(
        <div style={{flexDirection: "column", margin: '10em'}}>
        <form onChange={change} onSubmit={(e)=> submit(e)}>
        <label>
          First Name:
        </label>
        <input type="text" name="firstName"/>
        

        <label>
          Last Name:
          </label>
        <input type="text" name="lastName" />
       
 
        <label>
          Phone:
         </label>
        <input type="text" name="phone" />
        

        <label>
          Email:
        </label>
        <input type="text" name="email" />
        <input type="submit" value="Submit" style={{width: 50}}/> 
        </form>
        </div>
    )
}

export default Form
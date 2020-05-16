import React, {useState} from 'react'


const TForm = ({transactions, setToggle, balance, setBalance}) => {
    const [newTransaction, setNewTransaction] = useState({})
    const change = (event) => {
        setNewTransaction({...newTransaction, 
         [event.target.name]: event.target.value
        })
     }
    const submit = (e) => {
       e.preventDefault()
       if(newTransaction.amount > balance) {
           alert(`Cannot submit payment of ${newTransaction.amount}, insufficient funds`)
           setToggle(false)
       } else {
        newTransaction.id = transactions[transactions.length - 1].id - 1
        newTransaction.created = new Date()
        newTransaction.description = newTransaction.description.split(' ').map(el => {
        return el[0].toUpperCase() + el.slice(1).toLowerCase()
         }).join(' ')
     
        fetch("/api/account/100/transactions", {method: 'post', body: JSON.stringify(newTransaction)})
        .then((response) => response.json())
        .then((data) => {
            let newBalance = balance - data[data.length - 1].amount
            setBalance(newBalance.toFixed(2))
            setToggle(false)
        })
        .catch(error => error)
      }
}

   return  (
      <div>
        <h2>Add another transaction</h2>
      <form onChange={change} onSubmit={(e)=> submit(e)} id='tform'>
         <div className='tformElement'>
         <input type="number" name='amount' placeholder='$' min='1' max='1000000' required/> 
         </div>
         <div className='tformElement'>
         <input type='text' name='description' placeholder='description' required/>
         </div>
         <div className='tformElement'>
         <select>
             <option name='type' value='Credit'>Credit</option>
             <option name='type' value='Debit'>Debit</option>
         </select>
         </div>
         <input type="submit" value="Submit" id='submit'/>
      </form>
      
      
      </div>
    )
}


export default TForm
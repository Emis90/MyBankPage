import React, {useState} from 'react'


const TForm = ({transactions, setToggle, balance, setBalance}) => {
    const [newTransaction, setNewTransaction] = useState({type: 'Credit'})
    const change = (event) => {
        if([event.target.name] === 'Debit') {
            setNewTransaction({...newTransaction, type: 'Debit'})
        } else {
            setNewTransaction({...newTransaction, 
                [event.target.name]: event.target.value
               })
            }
        }
        
    const cancel = () => {
        setToggle(false)
        }
    const submit = (e) => {
       e.preventDefault()
       console.log(newTransaction)
       if(Number(newTransaction.amount) > Number(balance)) {
           alert(`Cannot submit payment of ${newTransaction.amount}, insufficient funds`)
           e.preventDefault()
        } else {
        newTransaction.id = transactions[transactions.length - 1].id - 1
        newTransaction.created = new Date()
        newTransaction.description = newTransaction.description.split(' ').map(el => {
        return el[0].toUpperCase() + el.slice(1).toLowerCase()
         }).join(' ')
    
        fetch('/api/account/100/transactions', {method: 'post', body: JSON.stringify(newTransaction)})
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
      <div className='form'>
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
            <button onClick={cancel} id='cancelButton'>X</button>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
        <h2>Add another transaction</h2>
        </div>
        </div>
        
      <form onChange={change} onSubmit={(e) => submit(e)}>
         <div className='fields'>
         <input type="number" name='amount' placeholder='amount' min='0.01' max='1000000' required step=".01"/> 
         </div>
         <div className='fields'>
         <input type='text' name='description' placeholder='description' required/>
         </div>
         <div className='fields'>
         <select name='type' defaultValue='Credit'>
             <option type='text' value='Credit' label='credit'/>
             <option type='text' value='Debit' label='debit'/>
         </select>
         </div>
         <div className='fields'>
         <input type='submit' value='Submit'/>
         </div>
      </form>
      </div>
    )
}

export default TForm
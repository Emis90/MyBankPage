import React from 'react'

const Card = ({transaction})=>{
    transaction.date = transaction.created.split('T')[0]
    transaction.time = transaction.created.split('T')[1].split('.')[0]
    return(
        <div className='card'>
         <div>
         <p style={{fontSize: 10}}>{transaction.date}   ||   {transaction.time}</p>
         </div>
         <div>
         <p>${transaction.amount}</p>
         <p>{transaction.description}</p>
         </div>
        </div>
    )
}

export default Card
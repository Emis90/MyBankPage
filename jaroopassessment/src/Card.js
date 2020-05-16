import React from 'react'

const Card = ({transaction})=>{
    return(
        <div className='card'>
         <p style={{fontSize: 10}}>{transaction.created}</p>
         <p>${transaction.amount}  ||  {transaction.description}</p>
        </div>
    )
}

export default Card
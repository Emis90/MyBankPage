import React from 'react'

const Card = ({transaction})=>{
    transaction.date = transaction.created.split('T')[0]
    transaction.time = transaction.created.split('T')[1].split('.')[0]
    return(
        <div className='card'>
         <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
         <p style={{fontSize: 10}}>{transaction.date}      {transaction.time}</p>
         <p style={{fontSize: 10}}>{transaction.type}</p>
         </div>
         <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
             <h3 style={{margin: 0}}>${transaction.amount}</h3>
         <h3 style={{margin: 0}}>{transaction.description}</h3>
         </div>
        </div>
    )
}

export default Card
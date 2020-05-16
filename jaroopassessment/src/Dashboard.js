import React, { useEffect, useState } from 'react';
import Card from './Card'
import axios from 'axios'

const Dashboard = ({balance, setBalance}) => {
    const [transactions, setTrans] = useState([])

    const getTransactions = async()=> {
        let {data} = await axios.get('/api/transactions')
        setTrans(data)
    }

    const purchase = async() => {
        let type = ['Credit', 'Debit']
        let random = 
            {
                id: transactions[transactions.length - 1].id - 1,
                created: new Date(),
                amount: (Math.random() * 1000).toFixed(2),
                type: type[Math.floor(Math.random() * (2 - 1) + 1)],
                description: 'Something fun'
            }

       if(balance < Number(random.amount)) {
            alert(`You cant finalize transaction for ${random.amount}$ because you only have  ${balance}$ available, YOU ARE BROKE`)
        } else {
            let {data} = await axios.post(`/api/transactions/${JSON.stringify(random)}`)
            let newBalance = balance - data[data.length - 1].amount
            setBalance(newBalance.toFixed(2))
        }

    }

    useEffect(() => {
      getTransactions()
    }, [balance])

    return (
        <div className='dashboard'>
            <div className="currentBalance">
            <h3 id='balanceTxt'>Current balance: {balance ? balance : null}</h3>
            <button id='addButton' onClick={()=> purchase()}>Purchase something random</button>
            </div>
            <div className="transactionsBox">
                <h2>Transactions</h2>

                <div className='passedTransactions'>
                  {transactions && transactions ? transactions.map(el => {
                      return <Card transaction={el}/>
                    }) : null}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
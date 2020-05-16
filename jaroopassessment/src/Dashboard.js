import React, { useEffect, useState } from 'react';
import Card from './Card'
import Modal from 'react-modal'
import TForm from './TForm'

const Dashboard = ({balance, setBalance}) => {
    const [transactions, setTrans] = useState([])
    const [toggle, setToggle] = useState(false)
    const getTransactions = async()=> {
        // let {data} = await axios.get('/api/transactions')
        try {
            fetch("/api/account/100/transactions", {method: 'get'})
            .then((response) => response.json())
            .then((data) => setTrans(data))
            .catch(error => error)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
      getTransactions()
    }, [balance])

    return (
        <div className='dashboard'>
            <div className="currentBalance">
            <h3 id='balanceTxt'>Current balance: {balance ? balance : null}</h3>
            <button onClick={()=> setToggle(true)}>Purchase something random</button>
            <Modal isOpen={toggle} ariaHideApp={false}>
             <TForm setBalance={setBalance} transactions={transactions} setToggle={setToggle} balance={balance}/>
            </Modal>
            </div>
            <div className="transactionsBox">
                <h2>Transactions</h2>
                <div className='passedTransactions'>
                  {transactions && transactions ? transactions.map(el => {
                      return <Card key={el.id} transaction={el}/>
                    }) : null}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
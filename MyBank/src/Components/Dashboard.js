import React, { useEffect, useState } from 'react';
import Card from './Card'
import Modal from 'react-modal'
import TForm from './TForm'

const Dashboard = ({balance, setBalance}) => {
    const [transactions, setTrans] = useState([])
    const [toggle, setToggle] = useState(false)
    const getTransactions = ()=> {
            fetch('/api/account/100/transactions', { method: 'get'})
            .then((response) => response.json())
            .then((data) => {
                setTrans(data)
            })
            .catch(error => error)
          }
    useEffect(() => {
      getTransactions()
    }, [balance])
    const modalStyle = {
        content : {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          width: '24em',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        }
      };
    return (
        <div className='dashboard'>
            <div className='currentBalance'>
            <h3 id='balanceTxt'>Current balance: {balance ? balance : null}</h3>
            <button id='randomButton' onClick={()=> setToggle(true)}>Purchase something random</button>
            <Modal isOpen={toggle} ariaHideApp={false} style={modalStyle}>
             <TForm setBalance={setBalance} transactions={transactions} setToggle={setToggle} balance={balance}/>
            </Modal>
            </div>
            <h3 style={{fontWeight: 'bold'}}>Transactions</h3>
            <div className='transactionsBox'>
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
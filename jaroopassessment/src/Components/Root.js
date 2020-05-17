import React, { useState, useEffect } from 'react';
import Profile from './Profile'
import Dashboard from './Dashboard'

const Root = () => {
    const [ page, setPage ] = useState('dashboard')
    const [ user, setUser ] = useState(null) 
    const [ balance, setBalance ] = useState(0)
  
    const getUser = ()=> {
      try {
        fetch('/api/account/100', {method: 'get'})
        .then((response) => response.json())
        .then((user) => {
          setUser(user)
        })
        .catch(error => error)  
      } catch (error) {
        console.log(error)
      }
  
    }
  
    const getBalance = () => {
      try {
        fetch(`/api/account/${user.id}/balance`, {method: 'get'})
        .then((response) => response.json())
        .then((res) => {
          setBalance(res.balance)
        })
        .catch(error => error)  
      } catch (error) {
        console.log(error)
      }

    }
  
    useEffect(() => {
      getUser()
    }, [])
    useEffect(() => {
      getBalance()
    }, [user])
  
    const changePage = (page) => {
      setPage(page)
    }
    return (
      <div className='Root'>
        <h3>Welcome back</h3>
        <header className='App-header'>
          <div className='dashHeader' onClick={()=> changePage('dashboard')}><p>dashboard</p></div>
          <div className='profHeader' onClick={()=> changePage('profile')}><p>profile</p></div>
        </header>
        <div className='container'>
          { page === 'dashboard' ? <Dashboard balance={balance} setBalance={setBalance}/> : <Profile user={user} setUser={setUser}/>}
        </div>
      </div>
    );
}


export default Root
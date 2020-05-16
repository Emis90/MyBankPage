import React, { useState, useEffect } from 'react';
import Profile from './Profile'
import Dashboard from './Dashboard'
import './App.css';


function App() {
  const [ page, setPage ] = useState('dashboard')
  const [ user, setUser ] = useState(null) 
  const [ balance, setBalance ] = useState(0)

  const getUser = async()=> {
    try {
      fetch("/api/account/100", {method: 'get'})
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user)
        setBalance(data.user.balance)
      })
      .catch(error => error)  
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUser()
  }, [])


  const changePage = (page) => {
    setPage(page)
  }
  return (
    <div className="App">
      <h3>Welcome back</h3>
      <header className="App-header">
        <div className="dashHeader" onClick={()=> changePage('dashboard')}><p>dashboard</p></div>
        <div className="profHeader" onClick={()=> changePage('profile')}><p>profile</p></div>
      </header>
      <div className='container'>
        { page === 'dashboard' ? <Dashboard balance={balance} setBalance={setBalance}/> : <Profile user={user} setUser={setUser}/>}
      </div>
    </div>
  );
}

export default App;

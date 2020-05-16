import React, { useState, useEffect } from 'react';
import Profile from './Profile'
import Dashboard from './Dashboard'
import './App.css';
import axios from 'axios'

function App() {
  const [ page, setPage ] = useState('profile')
  const [ user, setUser ] = useState(null) 
  const [ balance, setBalance ] = useState(0)

  const getUser = async()=> {
      let {data}= await axios.get('/api/user')
      setUser(data.user)
      setBalance(data.user.balance)
  }
  useEffect(() => {
    console.log('app renders')
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

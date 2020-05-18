import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Server } from "miragejs"
const transactions = [
  {
      "id": 1000,
      "created": "2020-02-21T20:32:03.681Z",
      "amount": 2000,
      "type": "Debit",
      "description": "Payroll Direct Deposit"
  },
  {
      "id": 999,
      "created": "2020-02-21T20:14:09.703Z",
      "amount": 45.55,
      "type": "Credit",
      "description": "Main Street Gas Station"
  }
]
const currentUser = {
  "id": 1000,
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane.smith@example.com",
  "phone": "5555555555",
  "created": "2020-02-21T02:00:00.000Z",
  "balance": "12345.67"
}


new Server({
  routes() {
    this.namespace = "/api"

    this.get("/account/:id", () => {
      try {
        return currentUser
      } catch (error) {
        console.log("error: ", error)
      }
    })
    this.get("/account/:id/transactions", ()=> {
      try {
        return transactions
      } catch (error) {
        console.log(error)
      }
    })
    this.get("/account/:id/balance", () => {
      try {
        console.log(currentUser.balance)
        return currentUser.balance
      } catch (error) {
        console.log("error: ", error)
      }
    })
    this.post("/account/:id/transactions", (schema, request, response) => {
      try {
        let data = request.requestBody
        data = JSON.parse(data)
        transactions.push(data)
        return transactions
      } catch (error) {
        console.log("error: ", error)
      }
    })
    this.put("/account/:id", (schema, request, response) => {
       try {
         let newUser = request.requestBody
         console.log('newuser without parsing ', newUser)
        //  newUser = JSON.parse(newUser)
         return newUser
       } catch (error) {
            console.log("error: ", error)
       }
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react"
import { useDispatch, useSelector } from "react-redux"
import cl from './App.module.css'
import { getCashAction, addCashAction } from "./store/cashReducer"
import { addCustomAction, removeCustomAction } from "./store/customerReducer"

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)


  const addCash = (cash) => {
    // dispatch({type: "ADD_CASH", payload: cash})
    dispatch(addCashAction(cash))
  }

  const getCash = (cash) => {
    // dispatch({type: "GET_CASH", payload: cash})
    dispatch(getCashAction(cash))
  }

  const addCustomer = (name) => {
    const customer = {
      id: Date.now(),
      name
    }
    // dispatch({type: "ADD_CUSTOMER", payload: customer})
    dispatch(addCustomAction(customer))
  }

  const removeCustomer = (customer) => {
    // dispatch({type: "REMOVE_CUSTOMERS", payload: customer.id})
    dispatch(removeCustomAction(customer.id))
  }

  return (
    <div className={cl.app}>
      <div className={cl.app__cash}>Баланс: {cash}</div>
      <div className={cl.btn__container}>
          <button className={cl.btn} onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
          <button className={cl.btn} onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
          <button className={cl.btn} onClick={() => addCustomer(prompt())}>Добавить клиента</button>
      </div>
      { customers.length > 0
         ? <div>
            {customers.map(customer =>
              <div key={customer.id}
                   className={cl.customer}
                   onClick={() => removeCustomer(customer)}
              >
                {customer.name}
              </div>
            )}
           </div >
         : <div className={cl.text}>Клиенты отсутствуют</div>
      }
    </div>
  )
}

export default App

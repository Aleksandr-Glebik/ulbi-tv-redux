import React from "react"
import { useDispatch, useSelector } from "react-redux"
import cl from './App.module.css'

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  console.log('cash', cash);

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  return (
    <div className={cl.app}>
      <div className={cl.app__cash}>{cash}</div>
      <div className={cl.btn__container}>
          <button className={cl.btn} onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
          <button className={cl.btn} onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
      </div>

    </div>
  )
}

export default App

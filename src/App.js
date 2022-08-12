import React from "react"
import cl from './App.module.css'
import { useDispatch, useSelector } from "react-redux"
import {incrementCreator, decrementCreator} from './store/countReducer'

function App() {
  const count = useSelector(state => state.countReducer.count)
  const users = useSelector(state => state.userReducer.users)
  const dispatch = useDispatch()

  return (
    <div className={cl.app}>
      <div className={cl.count}>{count}</div>
      <div className={cl.btn__container}>
          <button className={cl.btn} onClick={() => dispatch(incrementCreator())}>Инкремент++</button>
          <button className={cl.btn} onClick={() => dispatch(decrementCreator())}>Декремень--</button>
          <button className={cl.btn}>Получить юзеров</button>
      </div>
      <div>
        {users && users.map(user =>
          <div key={user.id}
                className={cl.customer}
          >
            {user.name}
          </div>
        )}
      </div >
    </div>
  )
}

export default App

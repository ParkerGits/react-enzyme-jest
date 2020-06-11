import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'
import App from './App'
import TodoListContainer from './TodoList'

ReactDOM.render(
  <Provider store={store}>
    <TodoListContainer />
  </Provider>,
  document.getElementById('root')
)

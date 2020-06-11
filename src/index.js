import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'
import App from './App'
import TodoListContainer from './TodoList'
import Form from './Form'

ReactDOM.render(
  <Form />,
  document.getElementById('root')
)

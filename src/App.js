import './App.css'
import TodoItem from './components/TodoItem/TodoItem'

import EditPage from './pages/Edit/EditPage'
import HomePage from './pages/Home/HomePage'
import TaskPage from './pages/Tasks/TasksPage'
import Router from './router'
import React from 'react'

function App() {
  return (
    <div className='App'>
      <Router />
    </div>
  )
}

export default App

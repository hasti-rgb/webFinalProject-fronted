import {
  BrowserRouter as ReactRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import React from 'react'

import HomePage from '../pages/Home/HomePage'

import EditPage from '../pages/Edit/EditPage'
import TaskPage from '../pages/Tasks/TasksPage'

const Router = () => {
  return (
    <ReactRouter>
      <Switch>
        <Route path='/homePage'>
          <HomePage />
        </Route>
        <Route path='/editPage'>
          <EditPage />
        </Route>
        <Route path='/taskPage'>
          <TaskPage />
        </Route>
      </Switch>
    </ReactRouter>
  )
}

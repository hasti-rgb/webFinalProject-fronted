import { BrowserRouter as ReactRouter, Routes, Route } from 'react-router-dom'

// import { BrowserRouter as ReactRouter, Switch, Route } from 'react-router-dom'
import React from 'react'
import HomePage from '../pages/Home/HomePage'
import EditPage from '../pages/Edit/EditPage'
import TaskPage from '../pages/Tasks/TasksPage'
import LoginPage from '../pages/Login/LoginPage'
import HistoryPage from '../pages/History/HistoryPage'

const Router = (path) => {
  return (
    <ReactRouter>
      <Routes>
        <Route path='/homePage' element={<HomePage />} />
        <Route path='/editPage' element={<EditPage />} />
        <Route path='/taskPage' element={<TaskPage />} />
        <Route path='/loginPage' element={<LoginPage />} />
        <Route path='/historyPage' element={<HistoryPage />} />
      </Routes>
    </ReactRouter>
    // <ReactRouter>
    //   <Switch>
    //     {routes.map((route) => {
    //       ;<Route
    //         key={route.path}
    //         path={route.path}
    //         component={route.component}
    //       />
    //     })}
    //     <Route path='/homePage'>
    //       <HomePage />
    //     </Route>
    //     <Route path='/editPage'>
    //       <EditPage />
    //     </Route>
    //     <Route path='/taskPage'>
    //       <TaskPage />
    //     </Route>
    //   </Switch>
    // </ReactRouter>
  )
}
export default Router

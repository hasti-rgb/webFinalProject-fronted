import './App.css'
import Router from './router'
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store/configure-store'
import Login from './pages/Login/LoginPage'
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router />
      </div>
    </Provider>
  )
}

export default App

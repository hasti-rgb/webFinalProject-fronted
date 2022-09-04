import React from 'react'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/header'
import '../../styles/LoginPage.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import store from '../../redux/store/configure-store.js'
import { adminLogin } from '../../redux/action/actions'
import { userLogin } from '../../redux/action/actions'

function Login() {
  const navigate = useNavigate()

  const [status, setStatus] = useState('Admin')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (status === 'Admin') {
      store.dispatch(adminLogin('Admin'))
      console.log(store.getState())
      navigate('/taskPage')
    } else {
      store.dispatch(userLogin('User'))
      console.log(store.getState())
      navigate('/taskPage')
    }
  }
  return (
    <div>
      <Header temp='Login' />

      <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
        <div className='select-container'>
          <select onChange={(e) => setStatus(e.target.value)}>
            <option value='Admin'>Admin</option>
            <option value='User'>User</option>
          </select>
        </div>
        <Button nameOfClass='login-btn' typOfBtn='submit'>
          Login
        </Button>
      </form>
    </div>
  )
}

export default Login

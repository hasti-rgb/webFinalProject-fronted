import '../../styles/header.css'
import { useNavigate } from 'react-router-dom'

import React from 'react'

const Header = ({ temp }) => {
  const navigate = useNavigate()

  return (
    <div className='header-tm'>
      <p className='task-m'>Task Management &gt; {temp}</p>
    </div>
  )
}
export default Header

import '../../styles/header.css'
import React from 'react'

const Header = ({ temp }) => {
  return (
    <div className='header-tm'>
      <p className='task-m'>Task Management &gt; {temp}</p>
    </div>
  )
}
export default Header

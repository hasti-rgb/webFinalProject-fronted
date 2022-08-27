import React from 'react'
import '../../styles/Button.css'

function Button({ children, nameOfClass }) {
  return (
    <button className={nameOfClass} type='button'>
      {children}
    </button>
  )
}

export default Button

import React from 'react'
import '../../styles/Button.css'

function Button({ children, nameOfClass, typOfBtn }) {
  return (
    <button className={nameOfClass} type={typOfBtn}>
      {children}
    </button>
  )
}

export default Button

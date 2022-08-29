import React from 'react'
import '../../styles/Button.css'

function Button({ children, nameOfClass, typOfBtn, onClick }) {
  return (
    <button className={nameOfClass} type={typOfBtn} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

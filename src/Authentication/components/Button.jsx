import React from 'react'
import "./Button.css"

const Button = ({ children, onClick, type = 'button', className , disabled = false,name= 'button'}) => {
    return (
        <button className = {className} onClick={onClick} type={type} disabled = {disabled} name={name}>
            {children}
        </button>
    )
}

export default Button

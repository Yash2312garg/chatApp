import React from 'react'
import Logo from "../../assets/icons.svg"
import "./Nav.css"
import Button from '../../Authentication/components/Button'
import { Navigate, useNavigate } from 'react-router-dom'

function Nav() {
    const navigate = useNavigate()
    const onClick = (e) => {
        const name = e.target.name
        if (name == 'login') {
            navigate("/login")
        } else if (name == 'signup') {
            navigate("/signup")

        }
    }
    return (
        <div className="navbar">
            <div className="navbar-left">
                {/* <img src={Logo} alt="LOGO" width="40px" height="40px" /> */}
                <span className="navbar-title">Digital Chat</span>
            </div>
            <div className="navbar-right">
                <Button onClick={onClick} type={'button'} className={"login-btn"} disabled={false} name='login'>Login</Button>
                <Button onClick={onClick} type={'button'} className={"login-btn-inverse"} disabled={false} name='signup'>Signup</Button>
            </div>
        </div>
    )
}

export default Nav

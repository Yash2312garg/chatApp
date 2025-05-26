import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import "./WelcomeSection.css"


const WelcomeSection = () => {
    const location = useLocation()
    return (
        <div className='left-panel'>
            <span className='left-panel-title '>
                {location?.pathname.includes("login") ? 'Welcome Back!' : 'Join Digital Chat'}
            </span>

            <span className='left-panel-text'>
                {location?.pathname.includes("login")
                    ? 'Log in to reconnect with friends and resume your conversations.'
                    : 'Share your smile with the world and make new friends by signing up today.'}
            </span>
        </div>
    )
}

export default WelcomeSection

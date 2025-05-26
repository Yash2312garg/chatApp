import React, { useState, useContext } from 'react'
import { Register } from './utils';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Signup.css"
import "../App.css";
import { UserContext } from '../Context/UserContext';
import WelcomeSection from './components/WelcomeSection';
import FormSection from './components/FormSection';
import { UserContextProvider } from '../Context/UserContext';
function Signup() {
    const location = useLocation()
    console.log(location)




    return (
        <div className='signup-container'>
            <div className='inner-signup-container'>
                <WelcomeSection />
                <div className='signup-right-container'>
                    <span className='signup-right-container-heading'>{location.pathname.includes("sign") ? "Signup" : "Login"}</span>
                        <FormSection />
                </div>
            </div>
        </div>
    );
}

export default Signup

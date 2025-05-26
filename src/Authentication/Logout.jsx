import React, { useState } from 'react';
import deleteImage from "../assets/delete.svg"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CiLogout } from 'react-icons/ci';
import './Logout.css';
const LogoutButton = () => {
    const [showPopup, setShowPopup] = useState(false); // State to toggle popup
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Send a request to the backend to log out
            await axios.post('/auth/logout');

            // Clear any local user data (optional)
            localStorage.removeItem('user'); // Remove any user data if stored

            // Redirect to the login page
            navigate('/');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <>
            <button
                className="sidebar-button"
                onClick={() => setShowPopup(true)}
            >
                <CiLogout className="sidebar-icon" />
            </button>

            {showPopup && (
                <div className="logout-popup-overlay">
                    <div className="logout-popup">
                        <div className='delete-icon-wrapper'>
                            <CiLogout className="delete-icon" />
                        </div>

                        <h2>Are you sure you want to logout?</h2>
                        <div className=" logout-btn-container">
                            <button
                                className="logout-button-cancel"
                                onClick={() => setShowPopup(false)}
                            >
                                Cancel
                            </button>   
                            <button
                                className="logout-button-confirm"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>

                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default LogoutButton;

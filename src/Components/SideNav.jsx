import React from 'react';
import { CiChat1, CiUser, } from "react-icons/ci";
import { useNavigate } from 'react-router-dom'; // Importing useNavigate
import LogoutButton from '../Authentication/Logout';
import { PiUserCirclePlus } from "react-icons/pi";
import "./SideNav.css"

function SideNav() {
    const navigate = useNavigate();
    const goToProfile = () => {
        navigate('/profile'); // Navigate to the profile page
    };
    const goToAddFriend = () => {
        navigate('/addfriend')
    }
    return (
        <div className="sidebar">
            <div className="sidebar-buttons">
                <button onClick={() => navigate('/chats')} className="sidebar-button">
                    <CiChat1 className="sidebar-icon" />
                </button>
                <button onClick={goToProfile} className="sidebar-button">
                    <CiUser className="sidebar-icon" />
                </button>
                <button onClick={goToAddFriend} className="sidebar-button">
                    <PiUserCirclePlus className="sidebar-icon" />
                </button>
            </div>
            <LogoutButton />
        </div>

    );
}

export default SideNav;

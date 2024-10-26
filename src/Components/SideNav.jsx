import React from 'react';
import { CiChat1, CiUser, CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom'; // Importing useNavigate
import LogoutButton from '../Authentication/Logout';

function SideNav() {
    const navigate = useNavigate();
    const goToProfile = () => {
        navigate('/profile'); // Navigate to the profile page
    };
    return (
        <div className='flex flex-col justify-between items-center text-white bg-gray-800 h-screen w-20 py-8 shadow-lg'>
            <div className='flex flex-col justify-between items-center gap-10'>
                <button onClick={() => navigate('/chats')} className='flex flex-col justify-center items-center text-white text-sm font-medium hover:bg-gray-700 p-2 rounded transition duration-300 ease-in-out'>
                    <CiChat1 className='text-2xl' />
                    <span>Chats</span>
                </button>
                <button
                    onClick={goToProfile}
                    className='flex flex-col justify-center items-center text-white text-sm font-medium hover:bg-gray-700 p-2 rounded transition duration-300 ease-in-out'>
                    <CiUser className='text-2xl' />
                    <span>Profile</span>
                </button>
            </div>
            <LogoutButton />
        </div>
    );
}

export default SideNav;

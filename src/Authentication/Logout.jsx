import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CiLogout } from 'react-icons/ci';

const LogoutButton = () => {
    const [showPopup, setShowPopup] = useState(false); // State to toggle popup
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Send a request to the backend to log out
            await axios.post('/logout');

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
            {/* Logout button */}
            <button
                className='flex flex-col justify-center items-center text-white text-sm font-medium hover:bg-gray-700 p-2 rounded transition duration-300 ease-in-out'
                onClick={() => setShowPopup(true)} // Open the popup
            >
                <CiLogout className='text-2xl' />
                <span>Logout</span>
            </button>

            {/* Popup for logout confirmation */}
            {showPopup && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                            Are you sure you want to logout?
                        </h2>
                        <div className="flex justify-end space-x-4">
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                                onClick={handleLogout} // Call logout handler
                            >
                                Yes, Logout
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition duration-200"
                                onClick={() => setShowPopup(false)} // Close the popup
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LogoutButton;

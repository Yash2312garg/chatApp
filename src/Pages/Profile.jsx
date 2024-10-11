import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import axios from 'axios';
import SideNav from '../Components/sideNav';

const Profile = () => {
  const { userName, id } = useContext(UserContext);
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/profile');
        setUser(response.data);
        setFormData(response.data); // Set form data for editing
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await axios.put('/profile', formData);
      setUser(formData); // Update user state with new data
      setIsEditing(false); // Exit edit mode
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  if (!user) {
    return <div className="text-center text-gray-600">No user information available.</div>;
  }

  return (
    <div className="flex h-screen bg-gray-900">
      <SideNav />
      <div className="flex flex-col items-center justify-center w-full bg-gray-800 p-4">
        <div className="bg-gray-700 rounded-lg shadow p-4 w-full md:w-1/3">
          <h1 className="text-sm font-semibold text-gray-300 mb-2">Profile Information</h1>

          {/* Profile Picture */}
          <div className="flex justify-center mb-2">
            <img
              src={user.profilePicture || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-gray-600"
            />
          </div>

          {/* User Details */}
          <div className="text-gray-200 text-xs mb-2">
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-600 border border-gray-500 text-gray-200 rounded px-2 py-1 mb-2"
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="bg-gray-600 border border-gray-500 text-gray-200 rounded px-2 py-1 mb-2"
                  placeholder="Username"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-600 border border-gray-500 text-gray-200 rounded px-2 py-1 mb-2"
                  placeholder="Email"
                />
              </>
            ) : (
              <>
                <p className="font-medium">Name: {user.name}</p>
                <p className="font-medium">Username: {user.username}</p>
                <p className="font-medium">Email: {user.email}</p>
              </>
            )}
          </div>

          {/* Additional Information (if any) */}
          {user.bio && (
            <div className="text-xs">
              <h2 className="font-medium">Bio</h2>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="bg-gray-600 border border-gray-500 text-gray-200 rounded px-2 py-1 w-full"
                  placeholder="Bio"
                />
              ) : (
                <p className="text-gray-400">{user.bio}</p>
              )}
            </div>
          )}

          {/* Action Button */}
          <div className="mt-4">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="bg-green-600 text-white text-xs px-2 py-1 rounded-lg hover:bg-green-500 transition duration-300"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={handleEditClick}
                className="bg-green-600 text-white text-xs px-2 py-1 rounded-lg hover:bg-green-500 transition duration-300"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import axios from 'axios';
import SideNav from '../Components/sideNav';
import { FiEdit2, FiSave, FiCamera, FiUpload } from 'react-icons/fi'; // Import icons
import { useWebcamCapture } from '../Hooks/usePhotGallery';
import Webcam from 'react-webcam'; // Import react-webcam

const Profile = () => {
  const { userName, id } = useContext(UserContext);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({});
  const [editingField, setEditingField] = useState(''); // Track which field is being edited
  const { isCameraOpen, capturedImg, startCamera, stopCamera, captureImage, webcamRef } = useWebcamCapture();

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/profile');
        setUser(response.data);
        setFormData(response.data); // Populate form data
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  // Unified input handler for form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file upload changes
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profilePicture: file });
    }
  };

  const handleEditClick = (field) => setEditingField(field);

  // Upload Profile Picture to Server
  const handleProfileUpload = async () => {
    if (!capturedImg && !formData.profilePicture) {
      alert('No file selected');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('userId', id);

    if (capturedImg) {
      formDataToSend.append('file', capturedImg);
    } else {
      formDataToSend.append('file', formData.profilePicture);
    }

    try {
      const response = await axios.post('http://localhost:4000/uploadProfile', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });

      if (response.status === 200) {
        alert('File uploaded successfully');
        console.log(response.data);
      } else {
        alert('Failed to upload file');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file: ' + error.message);
    }
  };

  // Save field
  const handleSave = async (field) => {
    setEditingField('');
    // Call backend to save the field if needed
    console.log(`Saved ${field}:`, formData[field]);
  };

  if (!user) return <div className="text-center text-gray-600">No user information available.</div>;

  return (
    <div className="flex h-screen bg-gray-900">
      <SideNav />
      <div className="flex flex-col items-center justify-center w-full bg-gray-800 p-4">
        <div className="bg-gray-700 rounded-lg shadow p-4 w-full md:w-1/3">
          <h1 className="text-sm font-semibold text-gray-300 mb-2">Profile Information</h1>

          {/* Profile Picture Section */}
          <ProfilePicture
            capturedImg={capturedImg}
            formData={formData}
            handleFileChange={handleFileChange}
            startCamera={startCamera}
            stopCamera={stopCamera}
            captureImage={captureImage}
            webcamRef={webcamRef}
            isCameraOpen={isCameraOpen}
            handleEditClick={handleEditClick}
            editingField={editingField}
            handleProfileUpload={handleProfileUpload}
          />

          {/* Read-only fields: Username, Email, Mobile Number */}
          <ProfileField label="Username" value={user.username} />
          <ProfileField label="Email" value={user.email} />
          <ProfileField label="Mobile Number" value={user.mobileNumber} />

          {/* Editable Status */}
          <EditableField
            label="Status"
            value={formData.status}
            field="status"
            editingField={editingField}
            onEdit={handleEditClick}
            onChange={handleChange}
            onSave={handleSave}
          />

          {/* Editable Password */}
          <button>
            Edit Password
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable Profile Picture Component
const ProfilePicture = ({
  capturedImg, formData, handleFileChange, startCamera, stopCamera, captureImage, webcamRef, isCameraOpen,
  handleEditClick, editingField, handleProfileUpload,
}) => (
  <div className="flex flex-col justify-center items-center mb-4">
    <div className="relative group">
      <img
        src={capturedImg || formData.profilePicture || 'https://via.placeholder.com/150'}
        alt="Profile"
        className="w-28 h-28 rounded-full border-4 border-gray-600 object-cover"
      />

      {!editingField && (
        <button
          onClick={() => handleEditClick('profilePicture')}
          className="absolute bottom-2 right-2 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 transition duration-300 ease-in-out"
        >
          <FiEdit2 className="text-xl" />
        </button>
      )}

      {editingField === 'profilePicture' && (
        <div className="mt-2 flex gap-2">
          <button onClick={startCamera} className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-500 transition duration-300">
            <FiCamera className="text-xl" />
          </button>
          <label htmlFor="file-upload" className="bg-green-600 text-white p-2 rounded-full hover:bg-green-500 transition duration-300">
            <FiUpload className="text-xl" />
            <input type="file" id="file-upload" accept="image/png, image/jpeg" onChange={handleFileChange} className="hidden" />
          </label>
          <button onClick={handleProfileUpload} className="bg-green-600 text-white p-2 rounded-full hover:bg-green-500 transition duration-300">
            <FiSave className="text-xl" />
          </button>
        </div>
      )}
    </div>

    {isCameraOpen && (
      <div className="mt-4">
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" className="w-28 h-28 rounded-full border-4 border-gray-600 object-cover" />
        <button onClick={captureImage} className="mt-2 bg-green-600 text-white p-2 rounded-full hover:bg-green-500 transition duration-300">
          Capture
        </button>
        <button onClick={stopCamera} className="mt-2 ml-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-500 transition duration-300">
          Close Camera
        </button>
      </div>
    )}
  </div>
);

// Reusable Profile Field Component
const ProfileField = ({ label, value }) => (
  <div className="text-gray-200 text-xs mb-2">
    <p className="font-medium">{label}: {value}</p>
  </div>
);

// Editable Field Component
const EditableField = ({ label, value, field, editingField, onEdit, onChange, onSave, type = 'text' }) => (
  <div className="text-gray-200 text-xs mb-2">
    {editingField === field ? (
      <>
        <input
          type={type}
          name={field}
          value={value}
          onChange={onChange}
          className="bg-gray-600 border border-gray-500 text-gray-200 rounded px-2 py-1 mb-2"
          placeholder={label}
        />
        <button onClick={() => onSave(field)} className="bg-green-600 text-white text-xs px-2 py-1 rounded-lg hover:bg-green-500 transition duration-300">
          Save {label}
        </button>
      </>
    ) : (
      <button onClick={() => onEdit(field)} className="bg-green-600 text-white text-xs px-2 py-1 rounded-lg hover:bg-green-500 transition duration-300">
        Edit {label}: {value}
      </button>
    )}
  </div>
);

export default Profile;

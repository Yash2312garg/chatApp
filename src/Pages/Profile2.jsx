import React, { useState } from 'react';

// Mock data for the profile
const initialProfile = {
  username: 'JohnDoe',
  profilePicture: '',
  bio: 'Just a simple developer.',
  location: 'New York, USA',
  language: 'English',
  theme: 'Light',
  chatBackground: 'Default',
  mood: '😊',
  notifications: true,
  doNotDisturb: false,
  privacy: {
    lastSeen: true,
    readReceipts: true,
  },
  statusMessage: 'Busy coding!',
  contacts: ['Alice', 'Bob', 'Charlie'],
  achievements: ['Code Master', '5-Year Member'],
  favoriteQuote: 'To be or not to be, that is the question.',
  spotifyPlaylist: 'My Chill Playlist',
  birthday: '1990-01-15',
};

const Profile2 = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [newProfilePic, setNewProfilePic] = useState(null); // For file input

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewProfilePic(file);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Upload new profile picture logic here (using newProfilePic)
    // API call to save changes can go here
    alert('Profile saved!');
  };

  return (
    <div className="profile-container">
      <h2>{isEditing ? 'Edit Profile' : 'Profile'}</h2>

      <div className="profile-section">
        <label>Username:</label>
        {isEditing ? (
          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleInputChange}
          />
        ) : (
          <p>{profile.username}</p>
        )}
      </div>

      <div className="profile-section">
        <label>Profile Picture:</label>
        {isEditing ? (
          <input type="file" name="profilePicture" onChange={handleFileChange} />
        ) : (
          <img src={profile.profilePicture || 'default-avatar.png'} alt="Profile" />
        )}
      </div>

      <div className="profile-section">
        <label>Bio:</label>
        {isEditing ? (
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleInputChange}
          />
        ) : (
          <p>{profile.bio}</p>
        )}
      </div>

      <div className="profile-section">
        <label>Location:</label>
        {isEditing ? (
          <input
            type="text"
            name="location"
            value={profile.location}
            onChange={handleInputChange}
          />
        ) : (
          <p>{profile.location}</p>
        )}
      </div>

      <div className="profile-section">
        <label>Language:</label>
        {isEditing ? (
          <select
            name="language"
            value={profile.language}
            onChange={handleInputChange}
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        ) : (
          <p>{profile.language}</p>
        )}
      </div>

      {/* Personalization and Preferences */}
      <div className="profile-section">
        <label>Theme:</label>
        {isEditing ? (
          <select name="theme" value={profile.theme} onChange={handleInputChange}>
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        ) : (
          <p>{profile.theme}</p>
        )}
      </div>

      <div className="profile-section">
        <label>Chat Background:</label>
        {isEditing ? (
          <input
            type="text"
            name="chatBackground"
            value={profile.chatBackground}
            onChange={handleInputChange}
          />
        ) : (
          <p>{profile.chatBackground}</p>
        )}
      </div>

      <div className="profile-section">
        <label>Mood:</label>
        {isEditing ? (
          <input type="text" name="mood" value={profile.mood} onChange={handleInputChange} />
        ) : (
          <p>{profile.mood}</p>
        )}
      </div>

      <div className="profile-section">
        <label>Notifications:</label>
        {isEditing ? (
          <input
            type="checkbox"
            name="notifications"
            checked={profile.notifications}
            onChange={() =>
              setProfile({ ...profile, notifications: !profile.notifications })
            }
          />
        ) : (
          <p>{profile.notifications ? 'On' : 'Off'}</p>
        )}
      </div>

      <div className="profile-section">
        <label>Do Not Disturb:</label>
        {isEditing ? (
          <input
            type="checkbox"
            name="doNotDisturb"
            checked={profile.doNotDisturb}
            onChange={() =>
              setProfile({ ...profile, doNotDisturb: !profile.doNotDisturb })
            }
          />
        ) : (
          <p>{profile.doNotDisturb ? 'On' : 'Off'}</p>
        )}
      </div>

      {/* Privacy Settings */}
      <div className="profile-section">
        <label>Privacy - Last Seen:</label>
        {isEditing ? (
          <input
            type="checkbox"
            name="lastSeen"
            checked={profile.privacy.lastSeen}
            onChange={() =>
              setProfile({
                ...profile,
                privacy: { ...profile.privacy, lastSeen: !profile.privacy.lastSeen },
              })
            }
          />
        ) : (
          <p>{profile.privacy.lastSeen ? 'Visible' : 'Hidden'}</p>
        )}
      </div>

      <div className="profile-section">
        <label>Privacy - Read Receipts:</label>
        {isEditing ? (
          <input
            type="checkbox"
            name="readReceipts"
            checked={profile.privacy.readReceipts}
            onChange={() =>
              setProfile({
                ...profile,
                privacy: {
                  ...profile.privacy,
                  readReceipts: !profile.privacy.readReceipts,
                },
              })
            }
          />
        ) : (
          <p>{profile.privacy.readReceipts ? 'On' : 'Off'}</p>
        )}
      </div>

      {/* Social and Engagement Features */}
      <div className="profile-section">
        <label>Status Message:</label>
        {isEditing ? (
          <input
            type="text"
            name="statusMessage"
            value={profile.statusMessage}
            onChange={handleInputChange}
          />
        ) : (
          <p>{profile.statusMessage}</p>
        )}
      </div>

      <div className="profile-section">
        <label>Contacts:</label>
        {isEditing ? (
          <input
            type="text"
            name="contacts"
            value={profile.contacts.join(', ')}
            onChange={(e) =>
              setProfile({ ...profile, contacts: e.target.value.split(', ') })
            }
          />
        ) : (
          <p>{profile.contacts.join(', ')}</p>
        )}
      </div>

      <div className="profile-section">
        <label>Achievements:</label>
        <p>{profile.achievements.join(', ')}</p>
      </div>

      <div className="profile-section">
        <label>Favorite Quote:</label>
        {isEditing ? (
          <input
            type="text"
            name="favoriteQuote"
            value={profile.favoriteQuote}
            onChange={handleInputChange}
          />
        ) : (
          <p>{profile.favoriteQuote}</p>
        )}
      </div>

      <div className="profile-section">
        <label>Spotify Playlist:</label>
        {isEditing ? (
          <input
            type="text"
            name="spotifyPlaylist"
            value={profile.spotifyPlaylist}
            onChange={handleInputChange}
          />
        ) : (
          <p>{profile.spotifyPlaylist}</p>
        )}
      </div>

      <div className="profile-section">
        <label>Birthday:</label>
        {isEditing ? (
          <input
            type="date"
            name="birthday"
            value={profile.birthday}
            onChange={handleInputChange}
          />
        ) : (
          <p>{profile.birthday}</p>
        )}
      </div>

      <button onClick={handleEditToggle}>
        {isEditing ? 'Cancel' : 'Edit Profile'}
      </button>
      {isEditing && <button onClick={handleSave}>Save</button>}
    </div>
  );
};

export default Profile2;

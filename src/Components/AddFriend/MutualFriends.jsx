import React from 'react'
import "./MutualFriends.css"
import MutualFriendCard from './MutualFriendcard';
const MutualFriends = () => {
    const user = {
        userName: "john_doe",
        name: "John Doe",
        profileImage: "https://via.placeholder.com/100",
        mutuals: 5
    };
    return (
        <div className='mutualfriends-body'>
            <h3>Mutual Friends (need to add this feature)</h3>
            <MutualFriendCard user={user} size='md' />
        </div>
    )
}

export default MutualFriends

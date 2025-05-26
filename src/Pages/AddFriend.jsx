import React from 'react'
import "./AddFriend.css"

import SideNav from '../Components/SideNav'
import AddFriendSearch from '../Components/AddFriend/AddFriendSearch'
import MutualFriends from '../Components/AddFriend/MutualFriends'
import Recentlyadded from '../Components/AddFriend/Recentlyadded'
import BlockedList from '../Components/AddFriend/BlockedList'
import RequestedList from '../Components/AddFriend/RequestedList'
const AddFriend = () => {
    return (
        <div className='AddFriend-body'>
            <SideNav />
            {/* <div> */}
            <AddFriendSearch />
            {/* </div> */}
            <div className='AddFriend-body-right'>
                <MutualFriends />
                <div className='AddFriend-body-right-bottom'>
                    <Recentlyadded />
                    <BlockedList />
                    <RequestedList />
                </div>
            </div>
        </div>
    )
}

export default AddFriend

import React, { useState } from 'react'
import Button from "../Components/Button/Button"
import { FaRegEdit } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import "./Contacts.css"
import StartNewConversation from './Chats/StartNewConversation';
function Contacts({ onLinePeople, setSelectedContact, offlinePeople, conversations }) {
  // const 
  const [popupbyId, setPupupbyId] = useState(null)
  return (


    <div className='chat-sidebar'>
      <div className='chat-sidebar-heading'>
        <h1>Conversation</h1>
        {!(conversations && conversations.length === 0) && <div className='chat-sidebar-heading-btn'>
          <Button><FaRegEdit /></Button>
          <Button><FaFilter /></Button>

        </div>}
      </div>

      {conversations && conversations.length === 0 &&
        <div className='chat-sidebar-no-conversation'>
          <span>you have not started any conversation</span>
          <Button>Start New Conversation</Button>
        </div>}


      {/* <div className="flex-grow overflow-y-auto">
        {conversations && conversations.length===0 && <span>you have not started any conversation</span>}
        {onLinePeople.map((contact) => (
          <div
            key={contact.userId}
            onClick={() => { setSelectedContact(contact) }}
            className="flex items-center p-2 mb-1 rounded-lg cursor-pointer transition duration-150 hover:bg-gray-800"
          >
            <img
              src={contact.profilePicture ? contact.profilePicture : '/default-profile.png'}
              alt={`${contact.username} profile`}
              className="w-8 h-8 rounded-full border border-green-400 mr-2"
            />
            <span className="text-gray-300 text-sm font-normal">{contact.username}</span>
          </div>
        ))}
      </div> */}
      {/* <h2 className="text-green-400 text-lg font-medium mb-4">OffLine Users</h2>


      <div className="flex-grow overflow-y-auto">

        {props.offlinePeople.map((contact) => (
          <div
            key={contact.userId}
            onClick={() => { props.setSelectedContact(contact) }}
            className="flex items-center p-2 mb-1 rounded-lg cursor-pointer transition duration-150 hover:bg-gray-800"
          >
            <img
              src={contact.profilePicture ? contact.profilePicture : '/default-profile.png'}
              alt={`${contact.username} profile`}
              className="w-8 h-8 rounded-full border border-grey-400 mr-2"
            />
            <span className="text-gray-300 text-sm font-normal">{contact.username}</span>
          </div>
        ))}
      </div> */}
    </div>

  )
}

export default Contacts

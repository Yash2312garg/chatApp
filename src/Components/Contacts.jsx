import React from 'react'

function Contacts(props) {
  // const contactList = [{ name: "user1", id: "wdcwcwv", recent: "hello this is the recent message", isOnline: true },
  // { name: "user2", id: "cda", recent: "hello this is the recent message", isOnline: false },
  // { name: "user3", id: "wdjbdc", recent: "hello this is the recent message", isOnline: false },
  // { name: "user4", id: "lwkcn", recent: "hello this is the recent message", isOnline: true },
  // { name: "user5", id: "lcnq", recent: "hello this is the recent message", isOnline: false },

  // ]
  
  return (
    <div className='flex flex-col w-[20vw] bg-gray-900 h-[100vh] p-3 border-r border-gray-700 font-sans'>
      <h2 className="text-green-400 text-lg font-medium mb-4">Online Users</h2>

      <div className="flex-grow overflow-y-auto">
        {props.onLinePeople.map((contact) => (
          <div
            key={contact.userId}
            onClick={() => { props.setSelectedContact(contact) }}
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
        {props.offlinePeople.map((contact) => (
          <div
            key={contact.userId}
            onClick={() => { props.setSelectedContact(contact) }}
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
      </div>
    </div>

  )
}

export default Contacts

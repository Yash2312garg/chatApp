import React from 'react';
import { AiOutlineUser } from 'react-icons/ai'; // Importing an icon for visual representation

function NoUserSelected() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <AiOutlineUser className="text-6xl text-gray-400 mb-4" />
      <h2 className="text-2xl font-semibold text-gray-600">No User Selected</h2>
      <p className="text-gray-500 text-center mt-2">
        Please select a user from the list to start chatting.
      </p>
    </div>
  );
}

export default NoUserSelected;

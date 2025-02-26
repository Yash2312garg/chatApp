import React, { useState, useEffect, useRef } from 'react';
import { CiPaperplane } from "react-icons/ci";
import { PiPaperclipLight } from "react-icons/pi";
import axios from 'axios';
import { uniqBy } from 'lodash';
import NoUserSelected from './Chats/NoUserSelected';

function IndividualChats(props) {
    const [newMessageText, setMessageText] = useState("");
    const messagesEndRef = useRef(null); // Reference for scrolling
    function sendMessage(e) {
        const recipientId = props.selectedContact?.userId || props.selectedContact?._id;

        if (recipientId) {
            // Send message over WebSocket
            props.ws.send(JSON.stringify({
                recipient: recipientId,
                text: newMessageText
            }));

            // Update the message state
            props.setMessages(prev => ([...prev, {
                text: newMessageText,
                sender: props.id, // Your user ID
                recipient: recipientId, // Recipient ID (userId or _id)
                id: Date.now() // Unique ID for the message
            }]));

            // Clear the input after sending
            setMessageText("");
        } else {
            console.log("No recipient selected.");
        }
    }


    useEffect(() => {
        console.log("hello")
        if (props.selectedContact?.userId || props.selectedContact?._id) {
            props.selectedContact?.userId ?
                axios.get("/messages/" + props.selectedContact?.userId).then(res => {
                    const { data } = res;
                    props.setMessages(data);
                    console.log(data)

                }) : axios.get("/messages/" + props.selectedContact?._id).then(res => {
                    const { data } = res;
                    props.setMessages(data);
                    console.log(data)

                })
        }
    }, [props.selectedContact]);

    // Scroll to bottom when messages change
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [props.messages]);

    const messagesWithoutDupes = uniqBy(props.messages, "_id");
    console.log(messagesWithoutDupes)
    return (
        <div className="flex flex-col w-full h-[100vh] bg-gray-900">
            {/* Top bar with username and profile picture */}
            {props.selectedContact && props.selectedContact?.username ? (
                <div className="flex items-center bg-gray-800 p-4 justify-between">
                    <div className="flex items-center">
                        <img
                            src={props.selectedContact.profilePicture ? props.selectedContact.profilePicture : '/default-profile.png'}
                            alt={`${props.selectedContact.username} profile`}
                            className="w-8 h-8 rounded-full mr-3"
                        />
                        <span className="text-base font-medium text-gray-100">{props.selectedContact.username}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button className="p-2 text-gray-400">i</button>
                        <button className="p-2 text-gray-400">...</button>
                    </div>
                </div>
            ) : (
                ""
            )}

            {/* Messages Section */}
            <div className="w-full flex flex-col flex-grow p-3 gap-3 overflow-y-auto scrollbar">
                {props.selectedContact === null ? (
                    <NoUserSelected />
                ) : (
                    messagesWithoutDupes.map((message, index) => {
                        const messageDate = new Date(message.updatedAt).toLocaleDateString();
                        const previousMessageDate = index > 0
                            ? new Date(messagesWithoutDupes[index - 1].updatedAt).toLocaleDateString()
                            : null;

                        const isNewDate = messageDate !== previousMessageDate;
                        console.log(messageDate)
                        return (
                            <React.Fragment key={message.id}>
                                {isNewDate && (
                                    <div className="text-center text-xs text-gray-500 mt-2 mb-2 ">
                                        {messageDate}
                                    </div>
                                )}
                                <div
                                    className={
                                        "p-2 rounded-lg max-w-[60%] " +
                                        (message.sender === props.id
                                            ? "bg-green-600 text-gray-100 self-end"
                                            : "bg-gray-800 text-gray-300 self-start")
                                    }
                                >
                                    <div className="text-sm">{message.text}</div>
                                    <div className="text-xs text-gray-500 mt-1">
                                        {new Date(message.updatedAt).toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    })
                )}
                {/* This div serves as a marker for scrolling */}
                <div ref={messagesEndRef} />
            </div>


            {/* Bottom Input Section */}
            <div className="flex items-center p-3 bg-gray-800">
                <button className="p-2 mr-3 text-gray-400">
                    <PiPaperclipLight />
                </button>
                <input
                    type="text"
                    placeholder="Enter Message"
                    value={newMessageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="flex-grow px-3 py-2 bg-gray-700 text-sm text-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-gray-600"
                />
                <button
                    onClick={(e) => sendMessage(e)}
                    className="ml-3 px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-500"
                >
                    <CiPaperplane />
                </button>
            </div>
        </div>
    );
}

export default IndividualChats;

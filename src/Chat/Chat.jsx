import React, { useContext, useEffect, useState } from 'react';
import SideNav from '../Components/SideNav';
import Contacts from '../Components/Contacts';
import { UserContext } from '../Context/UserContext';
import IndividualChats from '../Components/IndividualChats';
import axios from 'axios';

function Chat() {
  const [ws, setWs] = useState(null);
  const [onLinePeople, setOnlinePeople] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [offlinePeople, setOfflinePeople] = useState([])
  const { userName, id } = useContext(UserContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    ConnectToWS()
  }, []); // Empty dependency array ensures this only runs once when the component mounts

  useEffect(() => {
    axios.get('./people').then(res => {
      const tempOnlinePeople = onLinePeople.map((p) => p.userId)
      const offline = res.data?.filter(p => !(p.username === userName || tempOnlinePeople.includes(p._id)))
      setOfflinePeople(offline)
    })
  }, [onLinePeople])


  function ShowOnlinePeople(peopleArray) {
    const peopleSet = new Set(peopleArray);
    let peopleArr = [...peopleSet]
    peopleArr = peopleArr.filter((people) => (people?.username != userName))
    setOnlinePeople(peopleArr)
  }


  function ConnectToWS() {
    // Initialize WebSocket connection
    const ws = new WebSocket("ws://localhost:4000")
    setWs(ws)
    ws.addEventListener("message", handleMessage)
    ws.addEventListener("close", () =>
      setTimeout(() => {
        console.log("Disconnected. Trying to reconnect")
        ConnectToWS()
      }, 1000)
    )
  }
  function handleMessage(e) {
    const messageData = JSON.parse(e.data);
    if ("online" in messageData) {
      ShowOnlinePeople(messageData.online);

    } else if ("text" in messageData) {
      setMessages((prev) => ([...prev, { ...messageData }]))
    }
  }

  function handleDisconnect() {
    console.log("Disconnected from WebSocket, attempting to reconnect...");
    // Optionally handle reconnection logic here
  }

  // Cleanup when component unmounts or re-renders
  // return () => {
  //   ws.removeEventListener("message", handleMessage);
  //   ws.removeEventListener("close", handleDisconnect);
  //   ws.close();  // Close the WebSocket connection when the component unmounts
  // };

  return (
    <div className='flex flex-row justify-start items-start bg-[#A1D6B2]'>
      <SideNav />
      <div style={{ boxShadow: "3px 0 5px rgba(0, 0, 0, 0.15)", borderRadius: "120px" }} className='flex flex-row w-[100%]'>
        <Contacts onLinePeople={onLinePeople} setSelectedContact={setSelectedContact} offlinePeople={offlinePeople} />
        <IndividualChats selectedContact={selectedContact} ws={ws} setMessages={setMessages} messages={messages} id={id} />
      </div>
    </div>
  )
}

export default Chat

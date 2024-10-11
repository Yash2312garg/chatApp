import React, { useContext } from 'react'
import Signup from './Authentication/Signup'
import { UserContext } from './Context/UserContext'
import Chat from "./Chat/Chat"
function ChatsPage() {
  const {userName,id} = useContext(UserContext)
  if(userName){
    return <Chat />
  }
  return (
    <Signup/>
  )
}

export default ChatsPage

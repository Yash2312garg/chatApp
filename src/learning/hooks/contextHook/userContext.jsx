import React, { useEffect } from 'react'
import { createContext,useState } from 'react'

export const userContextProvide = createContext({});


const userContext = ({children}) => {
    const [userName,setUserName] = useState(null)
    const [userId,setUserId] = useState(null)

    useEffect(()=>{
        axios.post("api").then(()=>{
            setUserId(Response.id)
            setUserName(Response.setUserName)

        })
    },[userName])

  return (
    <userContextProvide.Provider value={{userName,setUserName,userId,setUserId}}>
        {children}
    </userContextProvide.Provider>
  )
}

export default userContext

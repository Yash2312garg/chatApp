import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Create the UserContext
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [userName, setUserName] = useState(null);
    const [id, setId] = useState(null);
    useEffect(() => {
        axios.get('/profile',    {
            withCredentials: true, // Allow cookies to be sent with the request
          }).then(response=>{
            console.log(response)
            setId(response.data._id)
            setUserName(response.data.username)
        })
    }, [userName])
    return (
        <UserContext.Provider value={{ userName, setUserName, id, setId }}>
            {children}
        </UserContext.Provider>
    )
}
import "./BlockedList.css"
import React,{useState,useEffect,useContext} from 'react'
import { UserContext } from "../../Context/UserContext";
import UserCardsComponent from './UserCards';
import axios from "axios";


const BlockedList = () => {
    // const blockedUsers = [
    //     { userName: "Sam_Winchester", name: "Sam Winchester" },
    //     { userName: "Dean_Winchester", name: "Dean Winchester" },
    //     { userName: "ClarkKent", name: "Clark Kent" },
    // ];
      const { id, token } = useContext(UserContext)
    //   const blockedUsers = [
    //     { userName: "Sam_Winchester", name: "Sam Winchester" },
    //     { userName: "Dean_Winchester", name: "Dean Winchester" },
    //     { userName: "ClarkKent", name: "Clark Kent" },
    //   ];
    
    
      const [blockedUsers, setBlockedUsers] = useState([])
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState(false)
      const fetchPendingUsers = async (id, setLoading, setError) => {
        try {
          setLoading(true)
          setError(false)
          const config = {
            headers: {
              authorization: `Bearer ${token}`
            },
    
            withCredentials: true
          }
          console.log(config)
          const response = await axios.get(import.meta.env.VITE_API_URL + '/friends/blockedUser', config)
          if (response.status === 200) {
            console.log(response)
            setBlockedUsers(response.data.blockedUsers)
            // repsonse.map()
          } else {
            throw new Error("Internal server Error")
          }
        } catch (e) {
          console.log(e)
          setError(true)
        } finally {
          setLoading(false)
        }
      }
      useEffect(() => {
        fetchPendingUsers(id, setLoading, setError)
      }, [id])
    return (
        <div className="requested-list-container">
            <h5>Blocked</h5>
            <div className="requested-users-list">
                {loading ? "loading...": blockedUsers ?blockedUsers.map((user, index) => (
                    <UserCardsComponent
                        key={index}
                        user={user}
                        size="sm"
                        status = {user.status}
                    />
                )): "No User Found"}
            </div>
        </div>
    )
}

export default BlockedList

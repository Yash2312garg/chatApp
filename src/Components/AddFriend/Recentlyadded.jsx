import React from 'react'
import "./Recentlyadded.css"
import UserCardsComponent from './UserCards'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { UserContext } from '../../Context/UserContext'
import { useContext } from 'react'
const Recentlyadded = () => {
  const RecentSearches = [
    { userName: "Yash_123", name: "Yash Garg" }, 
    { userName: "JohnDoe", name: "John Doe" }, 
    // { userName: "JaneSmith", name: "Jane Smith" }, 
    // { userName: "MikeRoss", name: "Mike Ross" }
  ]
  const [recentleAdded,setRecentlyAdded] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)
  const { id, token } = useContext(UserContext)


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
      const response = await axios.get(import.meta.env.VITE_API_URL + '/friends/recentlyAddedFriends', config)
      if (response.status === 200) {
        console.log(response)
        setRecentlyAdded(response.data.data)
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
    <div className="recently-added-container">
      <h5>Recently Added</h5>
      <div className="recent-searches-list">
        {loading? "loading...":  recentleAdded && recentleAdded.length>0 ? recentleAdded.map((user, index) => (
          <UserCardsComponent
            key={index}
            user={user}
            size="sm"
            friendship={user?.friendship}
            status = {user.status}
          />
        )):"No Pending requests"}
      </div>
    </div>
  )
}

export default Recentlyadded

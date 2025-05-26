import React, { useContext, useState, useEffect } from 'react';
import './RequestedList.css';
import UserCardsComponent from './UserCards';
import { UserContext } from '../../Context/UserContext';
import axios from 'axios';

const RequestedList = () => {
  const { id, token } = useContext(UserContext)
  const RequestedUsers = [
    { userName: "Sam_Winchester", name: "Sam Winchester" },
    { userName: "Dean_Winchester", name: "Dean Winchester" },
    { userName: "ClarkKent", name: "Clark Kent" },
  ];


  const [requestedUsers, setRrequestUsers] = useState([])
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
      const response = await axios.get(import.meta.env.VITE_API_URL + '/friends/pendingrequest', config)
      if (response.status === 200) {
        console.log(response)
        setRrequestUsers(response.data.sentRequests)
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
      <h5>Requested</h5>
      <div className="requested-users-list">
        {loading? "loading...":  requestedUsers && requestedUsers.length>0 ? requestedUsers.map((user, index) => (
          <UserCardsComponent
            key={index}
            user={user}
            size="sm"
            friendship={user?.friendship}
            status = {user.friendshipStatus}
          />
        )):"No Pending requests"}
      </div>
    </div>
  )
}

export default RequestedList;

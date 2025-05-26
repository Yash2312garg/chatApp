import React, { useEffect, useState } from 'react';
import "./AddFriendSearch.css"
import UserCardsComponent from './UserCards';
import InputField from '../../Authentication/components/InputField';
import axios from 'axios';
const AddFriendSearch = () => {
    const [query, setQuery] = useState("")
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1);
    const limit = 10;
    const [loading, setLoading] = useState(false)
    const [totalPages, setTotalPages] = useState(1);

    const fetchUsers = async (query) => {
        setLoading(true);
        try {
            console.log(query)
            const response = await axios.get(import.meta.env.VITE_API_URL + '/user/getpaginatedusers', {
                params: {
                "userName":query,
                page,
                limit}
            })
            console.log(response)
            setUsers(response.data.users || []);
            setTotalPages(response.data.totalPages || 1);
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        if (query) {
            fetchUsers(query)
        }
    }, [query])

    const onChange =  (e) => {
        setQuery(e.target.value)
    }

    // const s = ()

    // const users = []
    // const users = [{ userName: "Yash_123", name: "Yash Garg" }, { userName: "Yash_123", name: "Yash Garg" }, { userName: "Yash_123", name: "Yash Garg" }, { userName: "Yash_123", name: "Yash Garg" }]
    const RecentSearches = [{ userName: "Yash_123", name: "Yash Garg" }, { userName: "Yash_123", name: "Yash Garg" }, { userName: "Yash_123", name: "Yash Garg" }, { userName: "Yash_123", name: "Yash Garg" }]

    return (
        <div className='addfriendsearch-section'>
            <div>
                <h3>Search Friends</h3>
                <InputField
                    // label="Full Name"
                    onChange={onChange}
                    inputProperties={{ type: 'text', name: 'fullname', required: true }}
                    value={query}
                    error={""}
                    placeholder='Search...'
                    className="login-input" />
                <div className=''>
                    {loading ?"loading...":users.map((user) => <UserCardsComponent user={user}  size="sm"  friendship = {user?.friendship} status = {user.friendshipStatus}/> )}
                </div>
            </div>
            {users && users.length === 0 && <div>
                <h5>Recent Search</h5>
                <div className='addFriend-recent-search-list-component'>
                    {RecentSearches.map((user) => <UserCardsComponent user={user} size="sm" />)}
                </div>
            </div>}

        </div>
    )
}


export default AddFriendSearch;
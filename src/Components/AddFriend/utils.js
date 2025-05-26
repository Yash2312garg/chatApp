import axios from "axios"
export const sendFriendRequest = async (userId, recipientId) => {
    const response = await axios.post(import.meta.env.VITE_API_URL + '/friends/sendrequest', {
        sendersId: userId,
        recipientId: recipientId,
        status: 'pending'
    },{
        withCredentials: true
    })

    // const alreadysentRequest = await axios.post(import.meta.env.VITE_API_URL + '/friends/pendingrequest', {
    //     withCredentials: true

    // })

    // console.log(response)
    // console.log(alreadysentRequest)

}
export const cancelRequest = async (userId, recipientId) => {
    const response = await axios.post(import.meta.env.VITE_API_URL + '/friends/cancelFriendRequest', {
        sendersId: userId,
        recipientId: recipientId,
    },{
        withCredentials: true
    })

    // const alreadysentRequest = await axios.post(import.meta.env.VITE_API_URL + '/friends/pendingrequest', {
    //     withCredentials: true

    // })

    // console.log(response)
    console.log(response)

}

export const acceptRequest = async (userId) => {
    const response = await axios.post(import.meta.env.VITE_API_URL + '/friends/acceptFriendRequest', {
        senderId: userId,
        // recipientId: userId,
    },{
        withCredentials: true
    })

    // const alreadysentRequest = await axios.post(import.meta.env.VITE_API_URL + '/friends/pendingrequest', {
    //     withCredentials: true

    // })

    // console.log(response)
    console.log(response)

}


export const blockUser = async (userId) => {
    const response = await axios.post(import.meta.env.VITE_API_URL + '/friends/blockUser', {
        targetId: userId,
    },{
        withCredentials: true
    })
    console.log(response)

}

export const rejectFriendRequest = async (userId) => {
    const response = await axios.post(import.meta.env.VITE_API_URL + '/friends/rejectFriendRequest', {
        recipientId: userId,
    },{
        withCredentials: true
    })
    console.log(response)
}




export const unblockUser = async (userId) => {
    const response = await axios.post(import.meta.env.VITE_API_URL + '/friends/unblockUser', {
        targetId: userId,
    },{
        withCredentials: true
    })
    console.log(response)

}

export const unfriend = async (userId) => {
    const response = await axios.post(import.meta.env.VITE_API_URL + '/friends/unfriend', {
        targetId: userId,
    },{
        withCredentials: true
    })
    console.log(response)

}

export const pendingrequest = async ()=>{
    const response = await axios.post(import.meta.env.VITE_API_URL + '/friends/pendingrequest', {
        targetId: userId,
    },{
        withCredentials: true
    })
    console.log(response)
}



export const generalFriendsApiFunctions = async (case_type, userId, recipientId) => {
    switch (case_type){
        case 'add':
            return await sendFriendRequest(userId,recipientId) 
        case 'cancel':
            return await cancelRequest(userId,recipientId)
        case 'accept':
            return await acceptRequest(recipientId)
        case 'block':
            return await blockUser(recipientId)
        case 'reject':
            return await rejectFriendRequest(recipientId)
        case 'unblock':
            return await unblockUser(recipientId)
        case 'unfriend': //check
            return await unfriend(recipientId)
        default :
            return "no functions listed"
    }

}
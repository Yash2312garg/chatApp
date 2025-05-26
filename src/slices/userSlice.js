import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userId: null,
    userName: null,
    token: null,
    email: null
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload
        },
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        setemail: (state, action) => {
            state.email = action.email
        },
        logout: (state, action) => {
            state.userId = null;
            state.userName = null;
            state.token = null;
            state.email = null;
        }
    }
})

export const {setUserId,setUserName,setToken,setemail,logout} = UserSlice.actions;
export default UserSlice.reducer
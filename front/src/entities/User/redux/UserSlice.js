import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    firstName: '',
    secondName: '',
    role: '',
    email: '',
    access_token: '',
    refresh_token: '',
    isAuthenticate: false,
    completedStages: []
}



export const UserSlice = createSlice({
    initialState: initialState,
    name: 'user',
    reducers: {
        setRole(state, action){
            state.role = action.payload
        },
        login(state, action){
            state.access_token = action.payload.access_token
            state.refresh_token = action.payload.refresh_token
            state.isAuthenticate = true
        },
        refreshToken(state, action){
            state.access_token = action.payload
        },
        logout(state, action){
            state.firstName=''
            state.secondName=''
            state.role=''
            state.access_token=''
            state.refresh_token=''
            state.isAuthenticate=false
            state.email = ''
            state.completedStages=[]
        },
        setUser(state, action){
            state.firstName = action.payload.first_name
            state.secondName = action.payload.last_name
            state.role = action.payload.role
            state.email = action.payload.email
        },
        getAccessToken(state){
            return state.access_token
        }
    }
})
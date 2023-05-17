import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    firstName: 'Иванов',
    secondName: 'Иван',
    role: 'teacher',
    access_token: 'qweqwr qeqwdqwd',
    refresh_token: 'qwdqwd qwdqwd qw',
    isAuthenticate: true
}



export const UserSlice = createSlice({
    initialState: initialState,
    name: 'user',
    reducers: {
        
    }
})
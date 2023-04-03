import { createSlice } from "@reduxjs/toolkit"


export const PopupNames = {
    CHOSE: 'chose',
    SIGNIN: 'signin',
    SIGNUP: 'signup',
    CHOSE_QUESTION_TYPE: 'chose_question_type',
    ADD_CLASS: 'add_class',
    ADD_STUDENT: 'add_student',
}


const initialState = {
    popups: [
        {
            name: PopupNames.CHOSE,
            hidden: true
        },
        {
            name: PopupNames.SIGNIN,
            hidden: true
        },
        {
            name: PopupNames.SIGNUP,
            hidden: true
        },
        {
            name: PopupNames.CHOSE_QUESTION_TYPE,
            hidden: true
        },
        {
            name: PopupNames.ADD_CLASS,
            hidden: true
        },
        {
            name: PopupNames.ADD_STUDENT,
            hidden: true
        },
    ],
    activePopup: ''
}


export const PopupsSlice = createSlice({
    initialState: initialState,
    name: 'popups',
    reducers: {
        showPopup(state, action){
            state.popups.forEach(popup =>  popup.hidden = true )
            state.popups.find(popup =>  popup.name === action.payload ).hidden = false 
            state.activePopup = action.payload
        },
        closePopup(state, action){
            state.popups.find(popup =>  popup.name === action.payload ).hidden = true
            state.activePopup = ''
        },
        closeAllPopups(state){
            state.popups.forEach(popup =>  popup.hidden = true )
            state.activePopup = ''
        },

        switchAuthentication(state){
            switch (state.activePopup) {
                case PopupNames.SIGNIN:
                    state.popups.forEach(popup =>  popup.hidden = true )
                    state.popups.find(popup =>  popup.name === PopupNames.SIGNUP ).hidden = false
                    state.activePopup = PopupNames.SIGNUP
                    break;
                case PopupNames.SIGNUP:
                    state.popups.forEach(popup =>  popup.hidden = true )
                    state.popups.find(popup =>  popup.name === PopupNames.SIGNIN ).hidden = false
                    state.activePopup = PopupNames.SIGNIN
                    break;
                default:
                    state.popups.forEach(popup =>  popup.hidden = true )
                    state.popups.find(popup =>  popup.name === PopupNames.SIGNIN ).hidden = false
                    state.activePopup = PopupNames.SIGNIN
                    break;
            }
        }
        
    }
})


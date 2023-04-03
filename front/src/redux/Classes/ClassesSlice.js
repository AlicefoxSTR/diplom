import { createSlice } from '@reduxjs/toolkit'

const initiatlState = {
    classes: [
        // {
        //     id: 1,
        //     name: '5A',
        //     students: [
        //         {
        //             id: 1,
        //             fio: 'Иванов Иван',
        //             login: 'qwerty',
        //             password: '12345'
        //         }
        //     ]
        // }
    ]
}


export const ClassesSlice = createSlice({
    initialState: initiatlState,
        name: 'classes',
        reducers: {
            saveClass(state, action){
                state.classes.push({
                    id: Math.random().toString(36).substr(2, 9),
                    name: action.payload,
                    students: []
                })
            }
        }
})
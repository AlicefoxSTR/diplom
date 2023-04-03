import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

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
    ],
    editionalClass: '',
    editionalStudent: '',
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
            },
            saveStudent(state, action){
                state.classes.find(item => item.id === state.editionalClass).students.push({
                    id: Math.random().toString(36).substr(2, 9),
                    fio: action.payload,
                    login: 'qwerty',
                    password: '12345'
                })
            },
            editStudent(state, action){
                state.classes
                .find(item => item.id === action.payload.class).students
                .find(student => student.id === action.payload.student ).fio = action.payload.fio
            },
            removeEditionalClass(state){
                state.editionalClass = ''
            },
            removeEditionalSudent(state){
                state.editionalStudent = ''
            },
            setEditionalClass(state, action){
                state.editionalClass = action.payload
            },
            removeStudent(state, action){
                const students = state.classes.find(item => action.payload.class === item.id).students
                const index = students.findIndex(student => action.payload.student === student.id)
                if(index !== -1){
                    students.splice(index, 1)
                }
            },
            setEditionalStudent(state, action){
                state.editionalStudent = action.payload
            }
        }
})
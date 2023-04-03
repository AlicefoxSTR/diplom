import { createSlice } from '@reduxjs/toolkit'
import Image from 'assets/img/test-img.png'


const initialState = {
    cards: [
        {
            id: 1,
            img: Image,
            title: 'Персональные данные',
            text: 'Знаете ли вы, что такое персональные данные и как их защитить?',
            disabled: false
        },
        {
            id: 2,
            img: Image,
            title: 'Распространенные угрозы',
            text: 'Знаете ли вы, что такое персональные данные и как их защитить?',
            disabled: true
        },
    ]
}


export const TestsSlice = createSlice({
    name: 'tests',
    initialState: initialState,
    reducers: {

    }
})

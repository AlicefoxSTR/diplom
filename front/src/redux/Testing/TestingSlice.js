const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    tasks: [
        {
            id: 1,
            type: 'checkbox',
            question: 'Что НЕ относится к персональным данным ?',
            answers: [
                {
                    text: 'Фамилия, имя, отчество',
                    isCorrect: false
                },
                {
                    text: 'Все наши документы',
                    isCorrect: false
                },
                {
                    text: 'Банковские данные',
                    isCorrect: false
                },
                {
                    text: 'Картинка природы из Интернета',
                    isCorrect: true
                },
            ]
        },
        {
            id: 2,
            type: 'radio',
            question: 'Что НЕ относится к персональным данным ?',
            answers: [
                {
                    text: 'Фамилия, имя, отчество',
                    isCorrect: false
                },
                {
                    text: 'Все наши документы',
                    isCorrect: false
                },
                {
                    text: 'Банковские данные',
                    isCorrect: false
                },
                {
                    text: 'Картинка природы из Интернета',
                    isCorrect: true
                },
            ]
        },
        {
            id: 3,
            type: 'input',
            question: 'Что НЕ относится к персональным данным ?',
            answers: [
                {
                    text: 'Фамилия, имя, отчество',
                    isCorrect: false
                },
                {
                    text: 'Все наши документы',
                    isCorrect: false
                },
                {
                    text: 'Банковские данные',
                    isCorrect: false
                },
                {
                    text: 'Картинка природы из Интернета',
                    isCorrect: true
                },
            ]
        },
    ],
    activeTaskId: 1,
}


export const TestingSlice = createSlice({
    initialState: initialState,
    name: 'testing',
    reducers: {

    }
})
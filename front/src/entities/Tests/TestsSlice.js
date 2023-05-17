import { createSlice } from '@reduxjs/toolkit'
import Image from 'app/assets/img/test-img.png'


const initialState = {
    tests: [
        {
            id: 123124,
            img: Image,
            title: 'Антивирусы',
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
            ]
        },
        {
            id: 342153,
            img: Image,
            title: 'Второй тест',
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
            ]
        },
        {
            id: 3513512,
            img: Image,
            title: 'Третий тест',
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
            ]
        },
        {
            id: 3613513,
            img: Image,
            title: 'Четвертый тест',
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
            ]
        },
        {
            id: 21352135,
            img: Image,
            title: 'Пятый тест',
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
            ]
        },
    ]
}


export const TestsSlice = createSlice({
    name: 'tests',
    initialState: initialState,
    reducers: {

    }
})

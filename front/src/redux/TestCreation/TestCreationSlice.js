import { createSlice } from '@reduxjs/toolkit'

const initiatlState = {
    tasks: []

}


export const TestCreationSlice = createSlice({
    initialState: initiatlState,
        name: 'testCreation',
        reducers: {
            addRandomQuestion(state){
                state.tasks.push({
                    id: Math.random().toString(36).substr(2, 9),
                    type: 'checkbox',
                    question: 'Что НЕ относится к персональным данным ?   ' + Math.random().toString(36).substr(2, 9),
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
                    ],
                    isPersonal: false
                },)
            },
            deleteTaskFromList: (state, action) => {
                const index = state.tasks.findIndex(task => task.id === action.payload);
                if (index !== -1) {
                  state.tasks.splice(index, 1);
                }
              }
        }
})
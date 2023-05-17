import { createSlice } from '@reduxjs/toolkit'

const initiatlState = {
    tasks: [],
    activeTestCategory: '',
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
            addCustomQuestion(state, action){
                state.tasks.push({
                    id: Math.random().toString(36).substr(2, 9),
                    type: action.questionType,
                    question: action.payload.question,
                    answers: action.payload.answers,
                    isPersonal: true
                },)
            },
            deleteTaskFromList: (state, action) => {
                const index = state.tasks.findIndex(task => task.id === action.payload);
                if (index !== -1) {
                  state.tasks.splice(index, 1);
                }
            },
            setActiveTestCategory(state, action){
                state.activeTestCategory = action.payload
            },
            addQuestionToTasks(state, action){
                if(!state.tasks.find(task => task.id === action.payload.id)){
                    state.tasks.push(action.payload)
                }
            }
        }
})
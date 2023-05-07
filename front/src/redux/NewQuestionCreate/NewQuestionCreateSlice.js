import { createSlice } from '@reduxjs/toolkit'



export const questionTypes = {
    TEXT: 'text',
    CHECKBOX: 'checkbox',
    RADIO: 'radio'
}


const initiatlState = {
    question: '',
    questionType: '',
    answers: [],
    correctAnswers: questionTypes.CHECKBOX
}


export const NewQuestionCreateSlice = createSlice({
    initialState: initiatlState,
        name: 'newQuestionCreate',
        reducers: {
            setQuestion(state, action){
                state.question = action.payload
            },
            clearForm(state){
                state.question = ''
                state.answers = []
                state.correctAnswers = []
                state.questionType = questionTypes.CHECKBOX
            },
            setQuestionType(state, action){
                state.questionType = action.payload
            }
        }
})

export default NewQuestionCreateSlice.reducer
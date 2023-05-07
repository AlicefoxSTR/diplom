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
                state.answers = []
            },
            answersHandle(state, action){
                if(action.payload.value.length > 0){
                    const answer = state.answers.find(({id}) => id === action.payload.id)
                    if(answer){
                        answer.value = action.payload.value
                        return
                    }
                    state.answers.push(action.payload)
                    return
                } 
                state.answers = state.answers.filter( answer => answer.id !== action.payload.id )
            },
           
        
        }
})

export default NewQuestionCreateSlice.reducer
import { createSlice } from '@reduxjs/toolkit'



export const questionTypes = {
    TEXT: 'text',
    CHECKBOX: 'checkbox',
    RADIO: 'radio'
}


const initiatlState = {
    question: '',
    questionType: questionTypes.CHECKBOX,
    answers: [],
    correctAnswers: []
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
                state.correctAnswers = []
                state.answers = []
            },
            textAnswersHandler(state, action){
                if(action.payload.value.length > 0){
                    const correctAnswer = state.correctAnswers.find(({id}) => id === action.payload.id)
                    if(correctAnswer){
                        correctAnswer.value = action.payload.value
                        state.answers = state.correctAnswers
                        return
                    }
                    state.correctAnswers.push(action.payload)
                    state.answers = state.correctAnswers
                    return
                } 
                state.correctAnswers = state.correctAnswers.filter( answer => answer.id !== action.payload.id )
                state.answers = state.correctAnswers
            },
            checkboxAnswersHandler(state, action){
                if(action.payload.value.length > 0){
                    const answer = state.answers.find(({id}) => id === action.payload.id)
                    if(answer){
                        answer.value = action.payload.value
                        return
                    }
                    state.answers.push({
                        id: action.payload.id,
                        value: action.payload.value,
                    })
                    if(action.payload.checked){
                        state.correctAnswers.find(({id})=>action.payload.id === id).value = action.payload.value
                    }
                    return
                } 
                state.answers = state.answers.filter( answer => answer.id !== action.payload.id )
                state.correctAnswers = state.answers.filter( answer => answer.id !== action.payload.id )
            },
            radioAnswersHandler(state, action){
                if(action.payload.value.length > 0){
                    console.log(action.payload)
                    const answer = state.answers.find(({id}) => id === action.payload.id)
                    if(answer){
                        answer.value = action.payload.value
                        return
                    }
                    state.answers.push({
                        id: action.payload.id,
                        value: action.payload.value,
                    })
                    return
                } 
                state.answers = state.answers.filter( answer => answer.id !== action.payload.id )
            },
            toggleCheckboxAnswer(state, action){
                if(state.correctAnswers.find(({id})=>id === action.payload.id)){
                    state.correctAnswers = state.correctAnswers.filter(({id})=>id !== action.payload.id)
                }else{
                    state.correctAnswers.push(action.payload)
                }

            },
            toggleRadioAnswer(state, action){
                state.correctAnswers = [action.payload]

            },
           
        
        }
})

export default NewQuestionCreateSlice.reducer
const { createSlice } = require("@reduxjs/toolkit")


export const TestingTypes = {
    VIEW: 'view',
    STUDENT_TESTING: 'student_testing',
    USER_TESTING: 'user_testing',
    RESULTS: 'results'
}


const initialState = {
    test: {
        
    },
    activeTask: '',
    testingType: TestingTypes.VIEW,

}


export const TestingSlice = createSlice({
    initialState: initialState,
    name: 'testing',
    reducers: {
        openTesting(state, action){
            state.test = action.payload.test
            state.testingType = action.payload.type
            state.activeTask = state.test.tasks[0]
            state.taskIndex = 0
        },
        nextTask(state){
            if(state.taskIndex < state.test.tasks.length){
                state.activeTask = state.test.tasks[state.taskIndex+1]
                state.taskIndex += 1
            }
        },
        prevTask(state){
            if(state.taskIndex > 0){
                state.activeTask = state.test.tasks[state.taskIndex-1]
                state.taskIndex -=1
            }
        }

    }
})
import { createSlice } from "@reduxjs/toolkit"
import { ChosePopup } from 'modules/ChosePopup';
import { SigninPopup } from 'modules/SigninPopup/UI/SigninPopup';
import { SignupPopup } from 'modules/SignupPopup/UI/SignupPopup';
import { ChoseQuestionTypePopup } from 'modules/ChoseQuestionTypePopup/ChoseQuestionTypePopup';
import { AddClassPopup } from 'modules/AddClassPopup/AddClassPopup';
import { AddStudentPopup } from 'modules/AddStudentPopup/AddStudentPopup';
import { ChoseTestCategoryPopup } from 'modules/ChoseTestCategoryPopup/ChoseTestCategoryPopup';
import { ChoseQuestionPopup } from 'modules/ChoseQuestionPopup/ChoseQuestionPopup';
import { QuestionConstructorPopup } from 'modules/QuestionConstructorPopup/QuestionConstructorPopup';


export const PopupNames = {
    CHOSE: 'chose',
    SIGNIN: 'signin',
    SIGNUP: 'signup',
    CHOSE_QUESTION_TYPE: 'chose_question_type',
    ADD_CLASS: 'add_class',
    ADD_STUDENT: 'add_student',
    CHOSE_TEST_CATEGORY: 'chose_test_category',
    CHOSE_QUESTION: 'chose_question',
    QUESTION_CONSTRUCTOR: 'question_constructor',
}


export const PopupBodies = {
    [PopupNames.CHOSE]: ChosePopup,
    [PopupNames.SIGNIN]: SigninPopup,
    [PopupNames.SIGNUP]: SignupPopup,
    [PopupNames.CHOSE_QUESTION_TYPE]: ChoseQuestionTypePopup,
    [PopupNames.ADD_CLASS]: AddClassPopup,
    [PopupNames.ADD_STUDENT]: AddStudentPopup,
    [PopupNames.CHOSE_TEST_CATEGORY]: ChoseTestCategoryPopup,
    [PopupNames.CHOSE_QUESTION]: ChoseQuestionPopup,
    [PopupNames.QUESTION_CONSTRUCTOR]: QuestionConstructorPopup,

}


const initialState = {
            
    activePopup: null
}


export const PopupsSlice = createSlice({
    initialState: initialState,
    name: 'popups',
    reducers: {
        showPopup(state, action){
            state.activePopup = action.payload
        },
        closePopup(state){
            state.activePopup = null
        }        
    }
})


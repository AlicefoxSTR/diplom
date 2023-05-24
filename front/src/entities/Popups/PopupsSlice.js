import { createSlice } from "@reduxjs/toolkit"
import { ChoseRolePopup } from 'widgets/ChoseRolePopup';
import { SigninPopup } from 'widgets/SigninPopup/UI/SigninPopup';
import { SignupPopup } from 'widgets/SignupPopup/UI/SignupPopup';
import { ChoseQuestionTypePopup } from 'widgets/ChoseQuestionTypePopup/ChoseQuestionTypePopup';
import { AddClassPopup } from 'widgets/AddClassPopup/AddClassPopup';
import { AddStudentPopup } from 'widgets/AddStudentPopup/AddStudentPopup';
import { ChoseTestCategoryPopup } from 'widgets/ChoseTestCategoryPopup/ChoseTestCategoryPopup';
import { ChoseQuestionPopup } from 'widgets/ChoseQuestionPopup/ChoseQuestionPopup';
import { QuestionConstructorPopup } from 'widgets/QuestionConstructorPopup/QuestionConstructorPopup';
import { NameCreationTestPopup } from "widgets/NameCreationTestPopup/NameCreationTestPopup";


export const PopupNames = {
    CHOSE_ROLE: 'chose_role',
    SIGNIN: 'signin',
    SIGNUP: 'signup',
    CHOSE_QUESTION_TYPE: 'chose_question_type',
    ADD_CLASS: 'add_class',
    ADD_STUDENT: 'add_student',
    CHOSE_TEST_CATEGORY: 'chose_test_category',
    CHOSE_QUESTION: 'chose_question',
    QUESTION_CONSTRUCTOR: 'question_constructor',
    NAME_CREATION_TEST: 'name_creation_test',
}


export const PopupBodies = {
    [PopupNames.CHOSE_ROLE]: ChoseRolePopup,
    [PopupNames.SIGNIN]: SigninPopup,
    [PopupNames.SIGNUP]: SignupPopup,
    [PopupNames.CHOSE_QUESTION_TYPE]: ChoseQuestionTypePopup,
    [PopupNames.ADD_CLASS]: AddClassPopup,
    [PopupNames.ADD_STUDENT]: AddStudentPopup,
    [PopupNames.CHOSE_TEST_CATEGORY]: ChoseTestCategoryPopup,
    [PopupNames.CHOSE_QUESTION]: ChoseQuestionPopup,
    [PopupNames.QUESTION_CONSTRUCTOR]: QuestionConstructorPopup,
    [PopupNames.NAME_CREATION_TEST]: NameCreationTestPopup,

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


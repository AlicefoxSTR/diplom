import { createSlice } from "@reduxjs/toolkit"
import { ChoseRolePopup } from "../UI/ChoseRolePopup/ChoseRolePopup"
import { SigninPopup } from "../UI/SigninPopup/SigninPopup"
import { SignupPopup } from "../UI/SignupPopup/SignupPopup"
import { ChoseQuestionTypePopup } from "../UI/ChoseQuestionTypePopup/ChoseQuestionTypePopup"
import { AddClassPopup } from "../UI/AddClassPopup/AddClassPopup"
import { AddStudentPopup } from "../UI/AddStudentPopup/AddStudentPopup"
import { ChoseTestCategoryPopup } from "../UI/ChoseTestCategoryPopup/ChoseTestCategoryPopup"
import { ChoseQuestionPopup } from "../UI/ChoseQuestionPopup/ChoseQuestionPopup"
import { QuestionConstructorPopup } from "../UI/QuestionConstructorPopup/QuestionConstructorPopup"
import { NameCreationTestPopup } from "../UI/NameCreationTestPopup/NameCreationTestPopup"
import { ChoseActionForTestPopup } from "../UI/ChoseActionForTestPopup/ChoseActionForTestPopup"
import { MessagePopup } from "../UI/MessagePopup/MessagePopup"
import { OpenAccessPopup } from "../UI/OpenAccessPopup/OpenAccessPopup"


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
    CHOSE_ACTION_FOR_TEST: 'chose_action_for_test',
    OPEN_ACCESS: 'open_access',
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
    [PopupNames.CHOSE_ACTION_FOR_TEST]: ChoseActionForTestPopup,
    [PopupNames.MESSAGE_POPUP]: MessagePopup,
    [PopupNames.OPEN_ACCESS]: OpenAccessPopup,

}


const initialState = {
    activePopup: null,
    message: ''
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
        },
        openMessage(state, action){
            state.message = action.payload
            state.activePopup = PopupNames.MESSAGE_POPUP
        }   
    }
})


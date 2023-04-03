import React from 'react';
import { ChosePopup } from 'modules/ChosePopup';
import { SigninPopup } from 'modules/SigninPopup/UI/SigninPopup';
import { SignupPopup } from 'modules/SignupPopup/UI/SignupPopup';
import { ChoseQuestionTypePopup } from 'modules/ChoseQuestionTypePopup/ChoseQuestionTypePopup';
import { AddClassPopup } from 'modules/AddClassPopup/AddClassPopup';
import { AddStudentPopup } from 'modules/AddStudentPopup/AddStudentPopup';

export const Popups = (props) => {

    return (
        <>
            <ChosePopup />
            <SigninPopup  />
            <SignupPopup />
            <ChoseQuestionTypePopup />
            <AddClassPopup />
            <AddStudentPopup />
        </>
 );
}
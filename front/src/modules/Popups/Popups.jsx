import React, { useEffect, useMemo, useState } from 'react';
import { ChosePopup } from 'modules/ChosePopup';
import { SigninPopup } from 'modules/SigninPopup/UI/SigninPopup';
import { SignupPopup } from 'modules/SignupPopup/UI/SignupPopup';
import { ChoseQuestionTypePopup } from 'modules/ChoseQuestionTypePopup/ChoseQuestionTypePopup';
import { AddClassPopup } from 'modules/AddClassPopup/AddClassPopup';
import { AddStudentPopup } from 'modules/AddStudentPopup/AddStudentPopup';
import { ChoseTestCategoryPopup } from 'modules/ChoseTestCategoryPopup/ChoseTestCategoryPopup';
import { ChoseQuestionPopup } from 'modules/ChoseQuestionPopup/ChoseQuestionPopup';
import { useDispatch, useSelector } from 'react-redux';
import { PopupsSlice } from 'redux/Popups/PopupsSlice';
import { QuestionConstructorPopup } from 'modules/QuestionConstructorPopup/QuestionConstructorPopup';
export const Popups = (props) => {


    const dispatch = useDispatch()
    const { popups, activePopup} = useSelector(state => state.popups)

    function handleKeyDown(e){
        console.log(e)
        if (e.key === 'Escape'){
            dispatch(PopupsSlice.actions.closeAllPopups())
        }
    }

    useEffect(()=>{
        console.log(activePopup)
        if (activePopup.length !== 0){
            console.log('set')
            document.addEventListener('keydown', handleKeyDown )
        }else{
            console.log('remove')
            document.removeEventListener('keydown', handleKeyDown)
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
          };

    }, [activePopup])

    
    return (
        <>
            <ChosePopup  />
            <SigninPopup  />
            <SignupPopup />
            <ChoseQuestionTypePopup />
            <AddClassPopup />
            <AddStudentPopup />
            <ChoseTestCategoryPopup />
            <ChoseQuestionPopup />
            <QuestionConstructorPopup />
        </>
 );
}
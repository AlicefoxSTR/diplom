import React, { useState } from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './QuestionConstructorPopup.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { PopupWrapper } from 'components/PopupWrapper/PopupWrapper';
import { PopupBoard } from 'components/PopupBoard/PopupBoard';
import { Input } from 'UI/Input/Input';
import { NewQuestionCreateSlice, questionTypes } from 'redux/NewQuestionCreate';
import { Select } from 'UI/Select/Select';
import { AddAnswers } from 'modules/AddAnswers';


export const QuestionConstructorPopup = (props) => {
    const { className } = props;


    const { question, questionType } = useSelector(state=>state.newQuestionCreate)

    const dispatch = useDispatch()

    function closeHandler(){
        dispatch(NewQuestionCreateSlice.actions.clearForm())
    }

    return (
        <PopupWrapper closeHandler={closeHandler} >
            <PopupBoard className={ClassNames(cls.choseTestCategoryPopup, {}, [className])}>
                <h2 className="popupTitle">
                    Новый вопрос
                </h2>
                <label htmlFor="question" className={cls.label}>
                    Введите вопрос
                </label>
                <Input 
                    name={'question'} 
                    id={'question'}
                    placeholder={"Вопрос без заголовка"} 
                    value={question} 
                    onChange={e => dispatch(NewQuestionCreateSlice.actions.setQuestion(e.target.value))}
                    className={cls.input}
                />

                <Select 
                    options={[
                        { label: "Текст", value: questionTypes.TEXT },
                        { label: "Несколько из списка", value: questionTypes.CHECKBOX },
                        { label: "Один на выбор", value: questionTypes.RADIO },
                    ]} 
                    activeOption={questionType}
                    className={cls.select}
                />

                <AddAnswers questionType={questionType} />

               
            </PopupBoard>
        </PopupWrapper>
 );
}
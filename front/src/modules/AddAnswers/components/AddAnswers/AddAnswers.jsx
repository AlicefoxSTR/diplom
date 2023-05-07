import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './AddAnswers.module.css';
import { questionTypes } from 'redux/NewQuestionCreate';
import { AddTextAnswers } from '../AddTextAnswers/AddTextAnswers';
import { AddCheckboxAnswers } from '../AddCheckboxAnswers/AddCheckboxAnswers';

export const AddAnswers = (props) => {
    const { className, questionType } = props;

    return (
        <div className={ClassNames(cls.addAnswers, {}, [className])}>
            {
                questionType === questionTypes.TEXT
                ?
                <AddTextAnswers />
                :
                questionType === questionTypes.CHECKBOX
                ?
                <AddCheckboxAnswers />
                :
                <div>qwe</div>
            }
        </div>
 );
}
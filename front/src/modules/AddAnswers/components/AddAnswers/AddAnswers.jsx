import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './AddAnswers.module.css';
import { questionTypes } from 'redux/NewQuestionCreate';
import { AddTextAnswers } from '../AddTextAnswers/AddTextAnswers';

export const AddAnswers = (props) => {
    const { className, questionType } = props;

    return (
        <div className={ClassNames(cls.addAnswers, {}, [className])}>
            {
                questionType === questionTypes.TEXT
                ?
                <AddTextAnswers />
                :
                <div>qwe</div>
            }
        </div>
 );
}
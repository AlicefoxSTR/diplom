import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './CheckboxAnswers.module.css';
import { Checkbox } from 'UI/Checkbox/Checkbox';

export const CheckboxAnswers = (props) => {
    const { 
        className,
        answers
    } = props;

    return (
        <div className={ClassNames(cls.checkboxAnswers, {}, [className])}>
            {
                answers.map((answer, index) => (
                    <Checkbox text={answer.text} id={`answer_${index}`} key={`checkboxAnswerItem_${index}`} className={cls.row}/>
                ))
            }
        </div>
 );
}
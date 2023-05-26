import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './RadioAnswers.module.css';
import { RadioButton } from 'shared/UI/RadioButton/RadioButton';

export const RadioAnswers = (props) => {
    const { 
        className,
        answers
    } = props;

    return (
        <div className={ClassNames(cls.radioAnswers, {}, [className])}>
            {
                answers.map((answer, index) => (
                    <RadioButton text={answer.text} id={`answer_${index}`} name='answer'  key={`checkboxAnswerItem_${index}`} className={cls.row}/>
                ))
            }
        </div>
 );
}
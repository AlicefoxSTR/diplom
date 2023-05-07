import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './AddCheckboxAnswers.module.css';
import { Checkbox } from 'UI/Checkbox/Checkbox';

export const AddCheckboxAnswers = (props) => {
    const { className } = props;

    return (
        <div className={ClassNames(cls.addCheckboxAnswers, {}, [className])}>
            <Checkbox  text={'qwe'} name="answer" id={'qwe'} />
        </div>
 );
}
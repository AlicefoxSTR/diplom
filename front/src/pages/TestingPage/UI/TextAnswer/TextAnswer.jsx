import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './TextAnswer.module.css';
import { Input, InputTheme } from 'shared/UI/Input/Input';
import { PopupFormRow } from 'widgets/PopupFormRow/PopupFormRow';


export const TextAnswer = (props) => {
    const { className } = props;

    return (
        <div className={ClassNames(cls.textAnswer, {}, [className])}>
            <PopupFormRow theme={InputTheme.CLEAR} label={'Введите ваш ответ: '} />
        </div>
 );
}
import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './PopupFormRow.module.css';
import { Input, InputTheme } from 'UI/Input/Input';

export const PopupFormRow = (props) => {
    const { className, theme, id, label, ...otherProps } = props;

    return (
        <div className={ClassNames(cls.FormInputRow, {}, [className])}>
            <label htmlFor={id} className={cls.label}>{label}</label>
            <Input id={id} theme={InputTheme.CLEAR} className={cls.input} {...otherProps} />
        </div>
 );
}
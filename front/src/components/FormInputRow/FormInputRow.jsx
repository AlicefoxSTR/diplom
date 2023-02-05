import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './FormInputRow.module.css';
import { Input } from 'UI/Input/Input';

export const FormInputRow = (props) => {
    const { className, theme, id, label, ...otherProps } = props;

    return (
        <div className={ClassNames(cls.FormInputRow, {}, [className])}>
            <label htmlFor={id} className={cls.label}>{label}</label>
            <Input id={id} theme={theme} className={cls.input} {...otherProps} />
        </div>
 );
}
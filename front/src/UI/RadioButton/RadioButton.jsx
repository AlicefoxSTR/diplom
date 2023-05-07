import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './RadioButton.module.css';

export const RadioButton = (props) => {
    const { className, id, name, ...otherProps } = props;

    return (
        <div className={ClassNames(cls.radioButton, {}, [className])}>
            <input type="radio" name={name} id={id} className={cls.input} {...otherProps} />
            <label htmlFor={id} className={cls.label}>
            </label>
        </div>
 );
}
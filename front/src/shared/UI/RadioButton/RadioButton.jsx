import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './RadioButton.module.css';

export const RadioButton = (props) => {
    const { className, id, name, text, ...otherProps } = props;

    return (
        <div className={ClassNames(cls.radioButton, {}, [className])}>
            <input type="radio" name={name} id={id} className={cls.input} {...otherProps} />
            <label htmlFor={id} className={cls.label}>
                {text}
            </label>
        </div>
 );
}
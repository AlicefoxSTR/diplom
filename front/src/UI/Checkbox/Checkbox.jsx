import React from 'react';
import { ClassNames } from 'helpers/ClassNames/ClassNames';
import cls from './Checkbox.module.css';

export const Checkbox = (props) => {
    const { 
        className,
        text,
        id,
        name
    } = props;

    return (
        <div className={ClassNames(cls.checkbox, {}, [className])}>
            <input type='checkbox' id={id} name={name} className={ClassNames(cls.input, {}, [])}/>
            <label htmlFor={id}  className={ClassNames(cls.label, {}, [])} >
                {text}
            </label>
        </div>

 );
}
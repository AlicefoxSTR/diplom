import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './Checkbox.module.css';


export const CheckSides = {
    RIGHT: 'right',
    LEFT: 'left'
} 

export const Checkbox = (props) => {
    const { 
        className,
        text,
        id,
        checkSide=CheckSides.LEFT,
        name,
        value,
        ...otherProps
    } = props;

    return (
        <div className={ClassNames(cls.checkbox, {}, [className])}>
            <input 
                type='checkbox' 
                id={id} 
                name={name} 
                className={ClassNames(cls.input, {}, [])} 
                checked={value}
                {...otherProps}
            />
            <label htmlFor={id}  className={ClassNames(cls.label, {}, [cls[checkSide]])} >
                {text}
            </label>
        </div>

 );
}